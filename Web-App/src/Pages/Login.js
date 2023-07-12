import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../firebase-config";
import { signInWithPopup } from "@firebase/auth";
import { getDoc, setDoc, doc } from "firebase/firestore";
import "../Login.css";

function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if the user document already exists in Firestore
      const userRef = doc(db, "User", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // User document doesn't exist, create a new document
        await setDoc(userRef, {
          Name: user.displayName,
          Email: user.email,
          Points: 0,
          PostsDone: 0,
          // Store any other relevant user information
        });
      }
      navigate("/community");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Login-Page">
      <div class="google-btn">
        <div class="google-icon-wrapper">
          <img
            alt="google-icons"
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p class="btn-text">
          <button
            style={{
              backgroundColor: "transparent",
              border: 0,
              color: "white",
            }}
            onClick={signInWithGoogle}
          >
            Sign in with google
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
