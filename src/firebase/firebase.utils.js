import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
apiKey: "AIzaSyAdFDHDpqk5XVoQkGgWgUes1ZyK067OOhU",
authDomain: "ecommerce-db-9fa6e.firebaseapp.com",
databaseURL: "https://ecommerce-db-9fa6e.firebaseio.com",
projectId: "ecommerce-db-9fa6e",
storageBucket: "",
messagingSenderId: "27103748586",
appId: "1:27103748586:web:91fa6902a39d3260db5293"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   
    if(!userAuth) {
        return;
    }
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
       
        const snapShot = await userRef.get();
       
           


        if(!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            console.log('displayName',displayName);
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('Error Creating User', error.message);
            }

        }

    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;