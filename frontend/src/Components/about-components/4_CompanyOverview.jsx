import React from "react";
import { Box, Container, Grid, Chip, Typography, Card } from "@mui/material";
import { PRIMARY, SECONDARY } from "../../Constants.js";

export default function CompanyOverview() {
	return (
		<Box sx={{ py:{ xs:8,md:12 }, background:`linear-gradient(160deg,${PRIMARY}0d 0%,${SECONDARY}0d 100%)` }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign:"center", mb:8 }}>
					<Chip label="Company Overview" sx={{ mb:2, background:`${SECONDARY}20`, color:SECONDARY, fontWeight:700 }} />
					<Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.6rem" }, mb:2 }}>
						Two companies. One founder. One standard.
					</Typography>
				</Box>

				<Grid container spacing={4} justifyContent="center">
					{[
						{
							title:"CRKL Inc. — Chesterfield, MO",
							sub:"U.S.-Facing Corporation",
							desc:"A U.S.-registered corporation in Chesterfield, Missouri. Your contract, your contact, your accountability — all here in the U.S. CRKL Inc. is your single point of contact for every business, contractual, and quality-related matter.",
							color:PRIMARY, icon:"🇺🇸",
						},
						{
							title:"KOPL — Madurai, Tamil Nadu",
							sub:"Kamala Outsourcing Private Limited",
							desc:"KOPL is the dedicated Indian delivery arm — professionally staffed, securely operated, and directly overseen by Peri. All client work is performed in KOPL's dedicated, secure office in Madurai. Young, driven professionals who bring energy, precision, and a genuine commitment to exceeding the brief.",
							color:SECONDARY, icon:"🇮🇳",
						},
					].map((co) => (
						<Grid item xs={12} md={5} key={co.title}>
							<Card sx={{
								p:4, height:"100%", textAlign:"center",
								border:`2px solid ${co.color}30`,
								"&:hover":{ borderColor:co.color, boxShadow:`0 16px 50px ${co.color}22`, transform:"translateY(-4px)" },
								transition:"all .28s",
							}}>
								<Typography sx={{ fontSize:"3rem", mb:2 }}>{co.icon}</Typography>
								<Chip label={co.sub} size="small" sx={{ mb:2, background:`${co.color}18`, color:co.color, fontWeight:700 }} />
								<Typography variant="h6" sx={{ fontWeight:700, mb:2 }}>{co.title}</Typography>
								<Typography variant="body2" sx={{ opacity:0.72, lineHeight:1.8 }}>{co.desc}</Typography>
							</Card>
						</Grid>
					))}
				</Grid>

				<Box sx={{ textAlign:"center", mt:4, py:3, borderRadius:3, background:`linear-gradient(135deg,${PRIMARY}15,${SECONDARY}15)`, border:`1px solid ${PRIMARY}30` }}>
					<Typography sx={{ fontStyle:"italic", fontWeight:600, mb:0.5, opacity:0.85 }}>
						"One roof and one management — the same person who speaks with you is the person responsible for the outcome."
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
