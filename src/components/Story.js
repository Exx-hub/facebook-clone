import React from "react";
import "../styles/Story.css";
import Avatar from "@material-ui/core/Avatar";

function Story({ image, src, username }) {
	return (
		// can also use bg image instead style={{ backgroundImage: `url(${image})` }}
		<div className="story">
			<img src={image} alt="" />
			<Avatar src={src} />
			<h4>{username}</h4>
		</div>
	);
}

export default Story;
