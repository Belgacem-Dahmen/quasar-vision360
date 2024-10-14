import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from 'src/firebase/firebase';

import { ref } from 'vue';
import { errorNotification, successNotification } from './useNotify';

// // Initialisation de Firebase
const auth = getAuth(app);

// // Référence pour stocker l'utilisateur authentifié
const user = ref({});

// Fonction pour créer un nouvel utilisateur
const registerUser = async (email: string, password: string) => {
  try {
    const { user: newUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Met à jour user.value avec l'utilisateur nouvellement créé
    user.value = newUser;

    // Notification de succès
    successNotification('User created successfully');
  } catch (error) {
    // Log des erreurs pour debug
    console.error('Error registering user:', error);

    // Notification d'erreur
    errorNotification('Error registering user');

    // Propagation de l'erreur si nécessaire
    throw error;
  }
};

//  Fonction pour se connecter
const loginUser = async (email: string, password: string) => {
  try {
    const { user: loggedInUser } = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Mise à jour de user.value
    user.value = loggedInUser;

    // Notification de succès
    successNotification('User logged in successfully');
  } catch (error) {
    console.error('Error logging in:', error);
    // Notification d'erreur
    errorNotification('Error logging in');
// Propagation de l'erreur si nécessaire
    throw error;
  }
};

// Fonction pour se déconnecter
const logoutUser = async () => {
  try {
    await signOut(auth);
    user.value = {};
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

// Export des fonctions et de l'utilisateur
export { registerUser, loginUser,logoutUser, user };
