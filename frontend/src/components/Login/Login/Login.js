
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import firebaseConfig from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email: email, photo: photoURL }
        console.log(signedInUser)
        setLoggedInUser(signedInUser)
        storeUserAuthToken()
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const storeUserAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken)
        history.replace(from)
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }
  return (
    <div className="my-5 h-full">
      <button className="btn btn-primary font-weight-bold" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} size="lg" className="text-warning" /> Continue with google</button>
    </div>
  );
};

export default Login;