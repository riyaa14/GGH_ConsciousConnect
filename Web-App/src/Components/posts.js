import { doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function posts(props) {
  const id = props.postID;
  const handleDelete = async () => {
    try {
      // delete
      await deleteDoc(doc(db, "Post", id));

      // update points
      const userID = auth?.currentUser?.uid;
      const userRef = doc(db, "User", userID);
      console.log(userID);
      console.log(userRef);

      const data = await getDoc(userRef);
      console.log(data);
      const prevPoints = await data.data()["Points"];
      console.log(prevPoints);

      await updateDoc(userRef, {
        Points: prevPoints - 10,
      });
    } catch (e) {
      console.log(e);
      console.log(id);
    }
  };

  return (
    <>
      <div className="row">
        <div className="post-card">
          <div className="div1">
            <h4>{props.username}</h4>
            <p>{props.content}</p>
          </div>
          {auth?.currentUser?.uid === props.uid && (
            <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default posts;
