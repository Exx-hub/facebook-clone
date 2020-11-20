import React from "react";
import "../styles/Sidebar.css";

import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import MessageIcon from "@material-ui/icons/Message";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../contextAPI/GlobalContextProvider";

function Sidebar() {
	const [{ user }] = useStateValue();
	return (
		<div className="sidebar">
			<SidebarRow title={user?.displayName} src={user?.photoURL} />
			<SidebarRow
				title="COVID-19 Information Center"
				Icon={LocalHospitalIcon}
			/>
			<SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
			<SidebarRow title="Friends" Icon={PeopleIcon} />
			<SidebarRow title="Messenger" Icon={MessageIcon} />
			<SidebarRow title="Marketplace" Icon={StorefrontIcon} />
			<SidebarRow title="Videos" Icon={VideoLibraryIcon} />
			<SidebarRow title="Marketplace" Icon={ExpandMoreIcon} bottom />
			<h1>Your shortcuts</h1>
			<SidebarRow
				title="React Developers"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgVF1dospej2VMDF0sb-TuNCYudETDT6UKVQ&usqp=CAU"
			/>

			<p>
				No Privacy · No Terms · No Ads · No Cookies · No Rights Reserved ·
				Facebook Clone 2020 - This is a Demo{" "}
			</p>
		</div>
	);
}

export default Sidebar;
