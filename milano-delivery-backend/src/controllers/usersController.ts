import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import admin from '../firebase';
import {GoogleProfile} from "../types";

const db = admin.firestore();

class UsersController {
    async googleAuthCallback(req: Request, res: Response) {
        const user = req.user;
        const { id, displayName, emails } = user as GoogleProfile; // Assuming 'user' is of type 'GoogleProfile'
        const userObject = {
            id,
            name: displayName,
            email: emails[0].value,
        };
        let isNewUser = false;
        try {
            const userRef = db.collection('users').doc(id);
            const doc = await userRef.get();
            if (!doc.exists) {
                isNewUser = true;
                await userRef.set(userObject);
            }
            const token = jwt.sign(userObject, '1111'); // Consider using a more secure secret and storing it in an environment variable
            res.redirect(`${process.env.CLIENT_URL}/login?token=${token}&isNewUser=${isNewUser}`);
        } catch (error) {
            console.error("Error checking or storing user data in Firestore:", error);
            res.status(500).send('Internal Server Error');
        }
    }

    async completeUserData(req: Request, res: Response) {
        const userData = req.body
        console.log(userData,'userData')

        const user = {
            id: userData.id || jwt.sign( userData.email , '1111'),
            name: userData.name || '',
            email: userData.email,
            password: userData.password,
            age: userData.age,
            gender: userData.gender
        }

        const id = user.id
        const userRef = db.collection('users').doc(id);
        const doc = await userRef.get();

        if (!doc.exists) {
            await userRef.set(userData);
        } else {
            await userRef.update(userData);
        }
    }

    async getUsers(req: Request, res: Response) {
        const usersRef = db.collection('users');

        try {
            const snapshot = await usersRef.get();

            if (snapshot.empty) {
                return res.status(200).json({ message: 'No users found.', users: [] });
            }

            let users: any[] = [];
            snapshot.forEach(doc => {
                users.push({ id: doc.id, ...doc.data() });
            });

            res.status(200).json(users);

        } catch (error) {
            console.error('Error fetching users: ', error);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }

    async checkUser(req: Request, res: Response) {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        try {
            const usersRef = db.collection('users');
            const snapshot = await usersRef.where('email', '==', email).get();

            let existingCustomer = false;

            if (!snapshot.empty) {
                existingCustomer = true;
            }

            const isAdmin = req.body.isAdmin;

            // return res.status(200).redirect(`${process.env.CLIENT_URL}/login?customer=${existingCustomer}&isAdmin=${isAdmin}`);
            return res.status(200).send({
                existingCustomer,
                isAdmin
            })

        } catch (error) {
            console.error('Error checking user existence', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new UsersController();
