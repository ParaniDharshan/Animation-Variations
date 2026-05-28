import React from "react";
import CategoryGallery from "../CategoryGallery";

const inaugurationItems = [
	{ id: "inauguration-1", img: new URL("../../../assets/Events/Inaugration/IMG20250414113206.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414113206.webp", import.meta.url).href, height: 450 },
	{ id: "inauguration-2", img: new URL("../../../assets/Events/Inaugration/IMG20250414113205.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414113205.webp", import.meta.url).href, height: 820 },
	{ id: "inauguration-3", img: new URL("../../../assets/Events/Inaugration/IMG20250414113132.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414113132.webp", import.meta.url).href, height: 780 },
	{ id: "inauguration-4", img: new URL("../../../assets/Events/Inaugration/IMG20250414113130.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414113130.webp", import.meta.url).href, height: 840 },
	{ id: "inauguration-5", img: new URL("../../../assets/Events/Inaugration/IMG20250414111441.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414111441.webp", import.meta.url).href, height: 760 },
	{ id: "inauguration-6", img: new URL("../../../assets/Events/Inaugration/IMG20250414111440.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414111440.webp", import.meta.url).href, height: 810 },
	{ id: "inauguration-7", img: new URL("../../../assets/Events/Inaugration/IMG20250414111439.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414111439.webp", import.meta.url).href, height: 790 },
	{ id: "inauguration-8", img: new URL("../../../assets/Events/Inaugration/IMG20250414111437.webp", import.meta.url).href, url: new URL("../../../assets/Events/Inaugration/IMG20250414111437.webp", import.meta.url).href, height: 830 },
];

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
