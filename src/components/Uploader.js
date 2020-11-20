import React, { useState } from "react";
import "../styles/Uploader.css";

import Avatar from "@material-ui/core/Avatar";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../contextAPI/GlobalContextProvider";

import firebase from "firebase/app";
import db from "../firebase";

function Uploader() {
	const [textInput, setTextInput] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const [{ user }] = useStateValue();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");

		// some clever db stuff
		// this is how you add data to firestore
		db.collection("posts").add({
			username: user.displayName,
			profilePicture: user.photoURL,
			message: textInput,
			image: imgUrl,
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setTextInput("");
		setImgUrl("");
	};
	return (
		<div className="uploader">
			<div className="uploader__top">
				<Avatar src={user?.photoURL} alt={user?.displayName} />

				<form>
					<input
						placeholder={`What's on your mind, ${user?.displayName}?`}
						className="uploader__topInput1"
						value={textInput}
						onChange={(e) => setTextInput(e.target.value)}
					/>
					<input
						placeholder="image url (optional)"
						className="uploader__topInput2"
						value={imgUrl}
						onChange={(e) => setImgUrl(e.target.value)}
					/>
					<button type="submit" onClick={handleSubmit}>
						hidden submit
					</button>
				</form>
			</div>
			<div className="uploader__bottom">
				<div className="uploader__bottomIcon">
					<VideocamIcon className="uploader__bottomIcon--video" />
					<h4>Live Video</h4>
				</div>
				<div className="uploader__bottomIcon">
					<PhotoLibraryIcon className="uploader__bottomIcon--photo" />
					<h4>Photo/Video</h4>
				</div>

				<div className="uploader__bottomIcon">
					<InsertEmoticonIcon className="uploader__bottomIcon--emoji" />
					<h4>Feeling/Activity</h4>
				</div>
			</div>
		</div>
	);
}

export default Uploader;
