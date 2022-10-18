import { dbService } from "fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const Jweet = ({ jweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newJweet, setNewJweet] = useState(jweetObj.text);
  const JweetTextRef = doc(dbService, "jweets", `${jweetObj.id}`);

  //트윗 삭제 버튼
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this jweet?");
    console.log(ok);
    if (ok) {
      await deleteDoc(JweetTextRef);
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);

  //트윗 수정 버튼
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(JweetTextRef, {
      text: newJweet,
    });
    setEditing(false);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewJweet(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your jweet"
              value={newJweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Jweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{jweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Jweet</button>
              <button onClick={toggleEditing}>Edit Jweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Jweet;
