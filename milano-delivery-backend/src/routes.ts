import express from 'express';
import passport from './auth/passportSetup';
import isAdminMiddleware from './middleware/isAdminMiddleware'
import usersController from "./controllers/usersController";

const router = express.Router();

router.get(
    '/auth/google',
    passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', session: false }),
    usersController.googleAuthCallback
);


router.post('/complete-data', usersController.completeUserData);

router.get('/get-users', usersController.getUsers);

router.post('/check-user', isAdminMiddleware, usersController.checkUser)

export default router;
