import React from "react";
import CategoryGallery from "../CategoryGallery";

const annualConferenceItems = [
	{ id: "annual-conference-1", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0005.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0005.webp", import.meta.url).href, height: 940 },
	{ id: "annual-conference-2", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0006.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0006.webp", import.meta.url).href, height: 800 },
	{ id: "annual-conference-3", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0007.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0007.webp", import.meta.url).href, height: 780 },
	{ id: "annual-conference-4", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0008.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0008.webp", import.meta.url).href, height: 820 },
	{ id: "annual-conference-5", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0009.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0009.webp", import.meta.url).href, height: 860 },
	{ id: "annual-conference-6", img: new URL("../../../assets/Events/Annual Conference/IMG20250605214643.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG20250605214643.webp", import.meta.url).href, height: 650 },
	{ id: "annual-conference-7", img: new URL("../../../assets/Events/Annual Conference/IMG20250605214653.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG20250605214653.webp", import.meta.url).href, height: 740 },
	{ id: "annual-conference-8", img: new URL("../../../assets/Events/Annual Conference/IMG_0004.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0004.webp", import.meta.url).href, height: 800 },
	{ id: "annual-conference-9", img: new URL("../../../assets/Events/Annual Conference/IMG_0005.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0005.webp", import.meta.url).href, height: 780 },
	{ id: "annual-conference-10", img: new URL("../../../assets/Events/Annual Conference/IMG_0006.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0006.webp", import.meta.url).href, height: 830 },
	{ id: "annual-conference-11", img: new URL("../../../assets/Events/Annual Conference/IMG_0007.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0007.webp", import.meta.url).href, height: 790 },
	{ id: "annual-conference-12", img: new URL("../../../assets/Events/Annual Conference/IMG_0008.webp", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0008.webp", import.meta.url).href, height: 810 },
];

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
