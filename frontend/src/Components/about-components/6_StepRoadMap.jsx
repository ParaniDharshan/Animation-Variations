import React, { useState } from "react";
import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PRIMARY, SECONDARY, ROADMAP } from "../../Constants.js";

export default function StepRoadMap() {
	const [expanded, setExpanded] = useState(false);
	const toggle = (p) => (_, isExp) => setExpanded(isExp ? p : false);

	return (
		<Box sx={{ py:{ xs:8,md:12 }, background:`linear-gradient(160deg,${SECONDARY}0d 0%,${PRIMARY}0d 100%)` }}>
			<Container maxWidth="md">
				<Box sx={{ textAlign:"center", mb:8 }}>
					<Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.6rem" }, mb:2 }}>From first call to measurable results</Typography>
					<Typography sx={{ opacity:0.65 }}>Your contract is with CRKL Inc. Your concerns are ours to carry.</Typography>
				</Box>

				<Box sx={{ display:"flex", flexDirection:"column", gap:2 }}>
					{ROADMAP.map((r, i) => (
						<Accordion
							key={i} expanded={expanded===`r${i}`} onChange={toggle(`r${i}`)}
							disableGutters elevation={0}
							sx={{
								border:`1px solid ${expanded===`r${i}`?PRIMARY:"transparent"}40`,
								borderRadius:"14px !important", overflow:"hidden", "&:before":{ display:"none" },
								transition:"border-color .2s",
								"&.Mui-expanded":{ boxShadow:`0 8px 32px ${PRIMARY}18` },
							}}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:expanded===`r${i}`?PRIMARY:"inherit" }} />} sx={{ px:3, py:1 }}>
								<Box sx={{ display:"flex", alignItems:"center", gap:2 }}>
									<Typography sx={{
										fontFamily:"'Sora',sans-serif", fontWeight:900, fontSize:"1.6rem",
										background:`linear-gradient(135deg,${PRIMARY},${SECONDARY})`,
										WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", minWidth:48,
									}}>
										{r.step}
									</Typography>
									<Box>
										<Typography sx={{ fontWeight:700, fontSize:"1rem" }}>{r.title}</Typography>
										<Typography variant="caption" sx={{ opacity:0.6 }}>{r.sub}</Typography>
									</Box>
								</Box>
							</AccordionSummary>
							<AccordionDetails sx={{ px:3, pb:3, pt:0, pl:9 }}>
								<Typography sx={{ opacity:0.75, lineHeight:1.8 }}>{r.body}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>

				<Box sx={{ mt:5, p:4, borderRadius:3, textAlign:"center", background:`linear-gradient(135deg,${PRIMARY}12,${SECONDARY}12)`, border:`1px solid ${PRIMARY}25` }}>
					<Typography sx={{ fontStyle:"italic", fontWeight:600, mb:0.5, opacity:0.85 }}>
						"Our motto is to promise what we can deliver, and then deliver what we promised. Our strategy, however, is to deliver more than we promised."
					</Typography>
					<Typography variant="caption" sx={{ opacity:0.5 }}>— M. Peri Periasamy</Typography>
				</Box>
			</Container>
		</Box>
	);
}
