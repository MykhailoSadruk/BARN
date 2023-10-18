import admin from '../firebase';
import { User } from '../types'
import { Request, Response, NextFunction } from 'express';
const db = admin.firestore();

const isAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userEmail = req.body.email;

    if (!userEmail) {
        console.error("User email not available in request.");
        return res.status(400).send('Bad Request: Email required');
    }

    try {
        const adminRef = db.collection('admin');
        const snapshot = await adminRef.where('email', '==', userEmail).get();

        if (!snapshot.empty) {
            const adminData = snapshot.docs[0].data();

            if (adminData.isAdmin) {
                console.log(`Admin check successful for user: ${userEmail}`);
                req.body.isAdmin = true;
            } else {
                req.body.isAdmin = false;
            }
        } else {
            console.log(`No admin entry found for user: ${userEmail}`);
            req.body.isAdmin = false;
        }

        next();

    } catch (error) {
        console.error('Admin check failed:', error);
        res.status(500).send('Internal Server Error');
    }
};

export default isAdminMiddleware;
