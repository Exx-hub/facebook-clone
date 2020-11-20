import React from "react";
import { useStateValue } from "../contextAPI/GlobalContextProvider";
import "../styles/StoryReel.css";
import Story from "./Story";

function StoryReel() {
	const [{ user }] = useStateValue();
	return (
		<div className="storyReel">
			<Story
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2mSV19plHJzRByc26PT9DDfKQzmrkz8HW4Q&usqp=CAU"
				src={user?.photoURL}
				username={user?.displayName}
			/>
			<Story
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNVAC53z9hcUdvs5_qCU6pMHvFYXDIFUc52w&usqp=CAU"
				username="Ryan Reynolds"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTvQegNZn4hVX_yO71_dUL2YIvh_AyF3brEw&usqp=CAU"
			/>
			<Story
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVMRYast5E4stOZWqm5nqpgg7dXwnqIVryWQ&usqp=CAU"
				username="thegenegrey"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1yW1KRoZXRX1BjH0ttspgnApjnO9xj87mww&usqp=CAU"
			/>
			<Story
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYrBHzqnfcG-E_P4D0qVFaUsvfCaOi9xH8QQ&usqp=CAU"
				username="Seo Ye Ji"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw15qeOePT55JLlTTngtL-tMC9iZSdxLk93g&usqp=CAU"
			/>
			<Story
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6dvOEH7m9Smn7Ex-bS5cR9OkmfHnlFKNl7A&usqp=CAU"
				username="Exx-hub"
				src="https://avatars0.githubusercontent.com/u/61862900?s=60&v=4"
			/>
		</div>
	);
}

export default StoryReel;
