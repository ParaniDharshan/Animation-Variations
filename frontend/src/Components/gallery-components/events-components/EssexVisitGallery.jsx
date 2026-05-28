import React from "react";
import CategoryGallery from "../CategoryGallery";

const essexVisitItems = [
	{ id: "essex-visit-1", img: new URL("../../../assets/Events/Essex Visit/Essex001.webp", import.meta.url).href, url: new URL("../../../assets/Events/Essex Visit/Essex001.webp", import.meta.url).href, height: 860 },
	{ id: "essex-visit-2", img: new URL("../../../assets/Events/Essex Visit/Essex002.webp", import.meta.url).href, url: new URL("../../../assets/Events/Essex Visit/Essex002.webp", import.meta.url).href, height: 800 },
	{ id: "essex-visit-3", img: new URL("../../../assets/Events/Essex Visit/Essex003.webp", import.meta.url).href, url: new URL("../../../assets/Events/Essex Visit/Essex003.webp", import.meta.url).href, height: 780 },
];

function EssexVisitGallery(props) {
	return (
		<CategoryGallery
			title="Essex Visit"
			subtitle="Visit highlights and captured moments."
			items={essexVisitItems}
			backTab="Events"
			backButtonPosition="top"
			centered
			setActiveTab={props.setActiveTab}
			onBack={props.onBack}
			{...props}
		/>
	);
}

export default EssexVisitGallery;
