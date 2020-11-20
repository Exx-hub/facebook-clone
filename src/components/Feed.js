import React, { useEffect, useState } from "react";
import db from "../firebase";
import "../styles/Feed.css";
import Post from "./Post";
import StoryReel from "./StoryReel";
import Uploader from "./Uploader";
function Feed() {
	const [posts, setPosts] = useState([]);
	// console.log(posts);

	useEffect(() => {
		// pulling data from firestore to use in your app
		db.collection("posts")
			.orderBy("timeStamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => {
						return { id: doc.id, data: doc.data() };
					})
				);
			});
	}, []);
	return (
		<div className="feed">
			<StoryReel />
			<Uploader />
			{posts?.map((post) => (
				<Post
					key={post.id}
					profilePicture={post.data.profilePicture}
					username={post.data.username}
					timeStamp={post.data.timeStamp}
					image={post.data.image}
					message={post.data.message}
				/>
			))}
		</div>
	);
}

export default Feed;
