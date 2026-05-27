import React from "react";
import Masonry from "../Masonry";

const annualConferenceItems = [
	{ id: "annual-conference-1", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0005.jpg", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0005.jpg", import.meta.url).href, height: 940 },
	{ id: "annual-conference-2", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0006.jpg", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0006.jpg", import.meta.url).href, height: 800 },
	{ id: "annual-conference-3", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0007.jpg", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0007.jpg", import.meta.url).href, height: 780 },
	{ id: "annual-conference-4", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0008.jpg", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0008.jpg", import.meta.url).href, height: 820 },
	{ id: "annual-conference-5", img: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0009.jpg", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG-20250605-WA0009.jpg", import.meta.url).href, height: 860 },
	{ id: "annual-conference-6", img: new URL("../../../assets/Events/Annual Conference/IMG20250605214643.jpg", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG20250605214643.jpg", import.meta.url).href, height: 650 },
	{ id: "annual-conference-7", img: new URL("../../../assets/Events/Annual Conference/IMG20250605214653.jpg", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG20250605214653.jpg", import.meta.url).href, height: 740 },
	{ id: "annual-conference-8", img: new URL("../../../assets/Events/Annual Conference/IMG_0004.JPG", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0004.JPG", import.meta.url).href, height: 800 },
	{ id: "annual-conference-9", img: new URL("../../../assets/Events/Annual Conference/IMG_0005.JPG", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0005.JPG", import.meta.url).href, height: 780 },
	{ id: "annual-conference-10", img: new URL("../../../assets/Events/Annual Conference/IMG_0006.JPG", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0006.JPG", import.meta.url).href, height: 830 },
	{ id: "annual-conference-11", img: new URL("../../../assets/Events/Annual Conference/IMG_0007.JPG", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0007.JPG", import.meta.url).href, height: 790 },
	{ id: "annual-conference-12", img: new URL("../../../assets/Events/Annual Conference/IMG_0008.JPG", import.meta.url).href, url: new URL("../../../assets/Events/Annual Conference/IMG_0008.JPG", import.meta.url).href, height: 810 },
];

function AnnualConferenceGallery() {
	return <Masonry items={annualConferenceItems} colorShiftOnHover blurToFocus />;
}

export default AnnualConferenceGallery;
