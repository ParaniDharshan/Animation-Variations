import React from "react";
import Masonry from "../Masonry";

const essexVisitItems = [
	{ id: "essex-visit-1", img: new URL("../../../assets/Events/Essex Visit/Essex001.jpeg", import.meta.url).href, url: new URL("../../../assets/Events/Essex Visit/Essex001.jpeg", import.meta.url).href, height: 860 },
	{ id: "essex-visit-2", img: new URL("../../../assets/Events/Essex Visit/Essex002.jpeg", import.meta.url).href, url: new URL("../../../assets/Events/Essex Visit/Essex002.jpeg", import.meta.url).href, height: 800 },
	{ id: "essex-visit-3", img: new URL("../../../assets/Events/Essex Visit/Essex003.jpeg", import.meta.url).href, url: new URL("../../../assets/Events/Essex Visit/Essex003.jpeg", import.meta.url).href, height: 780 },
];

function EssexVisitGallery() {
	return <Masonry items={essexVisitItems} colorShiftOnHover blurToFocus />;
}

export default EssexVisitGallery;
