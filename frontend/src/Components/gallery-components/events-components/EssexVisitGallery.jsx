import React from "react";
import CategoryGallery from "../CategoryGallery";

const essexVisitItems = [];

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
