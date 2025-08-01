//import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import {
  auth,
  provider,
  signInWithPopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      //const result = await signInWithPopup(auth, provider);
      const { user } = await signInWithPopup(auth, provider);
      //console.log("User Info:", result.user);
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  // const logGoogleUser = async () => {
  //   const response = await signInWithGooglePopup();
  //   console.log(response);
  // };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Log in with Google</button>
    </div>
  );
};

export default SignIn;
