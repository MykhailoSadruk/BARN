import * as admin from 'firebase-admin';
import serviceAccount from '../firebaseServiceAccountKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});
console.log('launched with type', typeof serviceAccount)
export default admin;
