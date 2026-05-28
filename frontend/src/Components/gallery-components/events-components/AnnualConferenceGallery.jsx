import React from "react";
import CategoryGallery from "../CategoryGallery";

const annualConferenceItems = [];

function AnnualConferenceGallery(props) {
	return (
		<CategoryGallery
			title="Annual Conference"
			subtitle="Conference sessions, group photos, and event coverage."
			items={annualConferenceItems}
			backTab="Events"
			backButtonPosition="top"
			centered
			setActiveTab={props.setActiveTab}
			onBack={props.onBack}
			{...props}
		/>
	);
}

export default AnnualConferenceGallery;
