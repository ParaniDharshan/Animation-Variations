import React from "react";
import CategoryGallery from "../CategoryGallery";

const inaugurationItems = [];

function InaugurationGallery(props) {
	return (
		<CategoryGallery
			title="Inauguration"
			subtitle="Opening day moments and ceremony highlights."
			items={inaugurationItems}
			backTab="Events"
			backButtonPosition="top"
			centered
			setActiveTab={props.setActiveTab}
			onBack={props.onBack}
			{...props}
		/>
	);
}

export default InaugurationGallery;
