import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from 'src/firebase/firebase';

import { ref } from 'vue';
import { errorNotification, successNotification } from './useNotify';

const auth = getAuth(app);

const user = ref({});

const registerUser = async (email: string, password: string) => {
  try {
    const { user: newUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    user.value = newUser;
    successNotification('User created successfully');
  } catch (error) {
    console.error('Error registering user:', error);

    errorNotification('Error registering user');

    throw error;
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    const { user: loggedInUser } = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    successNotification('User logged in successfully');
    return loggedInUser;
  } catch (error) {
    console.error('Error logging in:', error);

    errorNotification('Error logging in');

    throw error;
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    user.value = {};
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

export { registerUser, loginUser, logoutUser, user };
