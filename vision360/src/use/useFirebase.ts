
import {  signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";



// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Référence pour stocker l'utilisateur authentifié
const user = ref(null);

// Fonction pour créer un nouvel utilisateur
const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    user.value = userCredential.user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Fonction pour se connecter
const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    user.value = userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Fonction pour se déconnecter
const logoutUser = async () => {
  try {
    await signOut(auth);
    user.value = null;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

// Fonction pour observer l'état de l'authentification
const observeAuthState = (callback: (user: any) => void) => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    callback(currentUser);
  });
};

// Export des fonctions et de l'utilisateur
export { registerUser, loginUser, logoutUser, observeAuthState, user };
