import React from "react";
import "../styles/Widgets.css";
import CakeIcon from "@material-ui/icons/Cake";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__top">
				<h4>Sponsored</h4>
			</div>

			<div className="widgets__middle">
				<h4>Birthdays</h4>
				<div className="widgets__birthday">
					<CakeIcon style={{ color: "pink", fontSize: "x-large" }} />
					<h5>
						<strong>Seo Ye Ji</strong> and <strong>6 others</strong> have
						birthdays today.
					</h5>
				</div>
			</div>

			<div className="widgets__bottom">
				<h4>Contacts</h4>
				<div>
					<VideoCallIcon />
					<SearchIcon />
					<MoreHorizIcon />
				</div>
			</div>

			<div className="widgets__contacts">
				<h3>See All (451)</h3>
				<ExpandMoreIcon />
			</div>
		</div>
	);
}

export default Widgets;
