import React from "react";
import "../styles/SidebarRow.css";
import Avatar from "@material-ui/core/Avatar";

function SidebarRow({ src, Icon, title, bottom }) {
	return (
		<div className={bottom ? "sidebarRow sidebarRow--bottom" : "sidebarRow"}>
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	);
}

export default SidebarRow;
