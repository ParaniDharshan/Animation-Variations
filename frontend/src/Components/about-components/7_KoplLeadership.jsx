import React from "react";
import { Box, Container, Chip, Typography, Card, Grid, Avatar } from "@mui/material";
import { PRIMARY, SECONDARY } from "../../Constants.js";

export default function KoplLeadership() {
	return (
		<Box sx={{ py:{ xs:8,md:10 } }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign:"center", mb:8 }}>
					<Chip label="KOPL Leadership" sx={{ mb:2, background:`${PRIMARY}20`, color:PRIMARY, fontWeight:700 }} />
					<Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.6rem" } }}>The team behind your work</Typography>
				</Box>

				<Card sx={{ maxWidth:700, mx:"auto", p:{ xs:3,md:5 }, border:`1px solid ${SECONDARY}30`, boxShadow:`0 16px 60px ${SECONDARY}18` }}>
					<Grid container spacing={3} alignItems="center">
						<Grid item xs={12} sm="auto" sx={{ textAlign:{ xs:"center",sm:"left" } }}>
							<Avatar sx={{
								width:100, height:100, mx:{ xs:"auto",sm:0 },
								fontSize:"2rem", fontWeight:800,
								background:`linear-gradient(135deg,${PRIMARY},${SECONDARY})`,
							}}>BR</Avatar>
						</Grid>
						<Grid item xs={12} sm>
							<Typography variant="h5" sx={{ fontWeight:700 }}>Beulah Radhakrishnan</Typography>
							<Typography sx={{ color:SECONDARY, fontWeight:600, mb:0.5 }}>General Manager, KOPL</Typography>
							<Typography variant="caption" sx={{ opacity:0.6 }}>B.Tech — Information Technology</Typography>

							<Typography sx={{ mt:2, opacity:0.75, lineHeight:1.8, fontSize:"0.95rem" }}>
								Beulah leads core operations and organizational development at KOPL. With over five years of consulting experience at CRKL Inc. and nearly three years as a Software Developer at Tata Consultancy Services, she brings a rare combination of technical depth and business management capability.
							</Typography>

							<Box sx={{ display:"flex", flexWrap:"wrap", gap:1, mt:2.5 }}>
								{["Project Management","Technology Execution","TCS Alumni","Avgira Technologies","Multi-lingual"].map((tag) => (
									<Chip key={tag} label={tag} size="small" sx={{ background:`${PRIMARY}15`, color:PRIMARY, fontWeight:600, fontSize:"0.7rem" }} />
								))}
							</Box>

							<Box sx={{ display:"flex", gap:1, mt:2, flexWrap:"wrap" }}>
								{["English","Hindi","Tamil","Telugu"].map((lang) => (
									<Chip key={lang} label={lang} size="small" variant="outlined" sx={{ borderColor:`${SECONDARY}50`, color:SECONDARY, fontSize:"0.7rem" }} />
								))}
							</Box>

							<Typography sx={{ mt:2.5, fontStyle:"italic", opacity:0.7, fontSize:"0.9rem", borderLeft:`3px solid ${SECONDARY}`, pl:2 }}>
								"Leadership is about coordination, clarity, and care."
							</Typography>
						</Grid>
					</Grid>
				</Card>
			</Container>
		</Box>
	);
}

