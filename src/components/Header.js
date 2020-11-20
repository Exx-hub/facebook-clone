import React from "react";
import "../styles/Header.css";

import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from "@material-ui/icons/Home";
import TvIcon from "@material-ui/icons/Tv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../contextAPI/GlobalContextProvider";

function Header() {
	const [{ user }] = useStateValue();
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
					alt=""
				/>
				<div className="header__leftSearch">
					<SearchIcon className="header__leftSearch--icon" />
					<input type="text" placeholder="Search Facebook" />
				</div>
			</div>

			<div className="header__middle">
				<HomeIcon className="header__middle--active" />
				<TvIcon />
				<StorefrontIcon />
				<SupervisedUserCircleIcon />
				<VideogameAssetIcon />
			</div>

			<div className="header__right">
				<Avatar src={user?.photoURL} alt={user?.displayName} />
				<h4>{user?.displayName}</h4>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<QuestionAnswerIcon />
				</IconButton>

				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>

				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
