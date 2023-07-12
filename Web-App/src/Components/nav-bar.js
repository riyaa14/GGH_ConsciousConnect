import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const [points, setPoints] = useState(0);

  const getpoints = async () => {
    try {
      const userID = auth?.currentUser?.uid;
      const userRef = doc(db, "User", userID);
      // console.log(userID);
      // console.log(userRef);

      const data = await getDoc(userRef);
      // console.log(data);
      const userPoints = await data.data()["Points"];
      setPoints(userPoints);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getpoints();
      } else {
        console.log("user logged out");
      }
    });
  }, []);

  return (
    <div class="intro">
      <nav class="navbar">
        <div class="navbar-title">{auth?.currentUser?.displayName}</div>

        <Link to="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </Link>

        <div class="navbar-link">
          <ul>
            <li>
              <Link to="#" style={{ color: "#998602" }}>
                {points} PTS
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="#">Challenges</Link>
            </li>
            <li>
              <Link to="/Community">Community</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
