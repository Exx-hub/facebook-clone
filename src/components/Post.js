import React from "react";
import "../styles/Post.css";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";

function Post({ profilePicture, username, timeStamp, message, image }) {
	// console.log(timeStamp?.toDate().toTimeString());
	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePicture} />
				<div className="post__topName">
					<h4>{username}</h4>
					{/* <small>
						{timeStamp.toLocaleDateString()} {timeStamp.toLocaleTimeString()}
					</small> */}
					<small>
						{timeStamp?.toDate().toDateString()}{" "}
						{timeStamp?.toDate().toLocaleTimeString()}
					</small>
				</div>
				<MoreHorizIcon />
			</div>

			<div className="post__middle">
				<h4>{message}</h4>
			</div>
			{image && <img src={image} alt="" />}
			<div className="post__bottom">
				<div className="post__bottomIcons">
					<ThumbUpAltIcon />
					<h4>Like</h4>
				</div>
				<div className="post__bottomIcons">
					<ChatBubbleOutlineIcon />
					<h4>Comment</h4>
				</div>
				<div className="post__bottomIcons">
					<NearMeIcon />
					<h4>Share</h4>
				</div>
			</div>
		</div>
	);
}

export default Post;
