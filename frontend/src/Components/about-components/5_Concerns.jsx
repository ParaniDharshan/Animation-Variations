import React from "react";
import { Box, Container, Grid, Card, Typography, Chip, Divider, Button } from "@mui/material";
import { PRIMARY, SECONDARY, CONCERNS } from "../../Constants.js";

export default function Concerns() {
	return (
		<Box sx={{ py:{ xs:8,md:12 } }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign:"center", mb:8 }}>
					<Chip label="We Understand Your Concerns" sx={{ mb:2, background:`${PRIMARY}20`, color:PRIMARY, fontWeight:700 }} />
					<Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.6rem" }, mb:2 }}>
						You have questions. They are the right questions.
					</Typography>
					<Typography sx={{ opacity:0.65, maxWidth:540, mx:"auto", lineHeight:1.8, textAlign:"left" }}>
						If someone has suggested outsourcing your work to a firm with operations in India — you should have concerns. Every serious business owner does. CRKL Inc. not only understands those concerns; they were the reason this company was built.
					</Typography>
				</Box>

				<Grid container spacing={3}>
					{CONCERNS.map((c, i) => (
						<Grid item xs={12} md={6} key={i}>
							<Card sx={{
								p:3, height:"100%",
								border:`1px solid ${i%2===0?PRIMARY:SECONDARY}22`,
								"&:hover":{ borderColor:i%2===0?PRIMARY:SECONDARY, boxShadow:`0 8px 30px ${PRIMARY}15`, transform:"translateY(-3px)" },
								transition:"all .25s",
							}}>
								<Typography sx={{ fontWeight:700, mb:1.5, fontSize:"0.95rem", color:i%2===0?PRIMARY:SECONDARY }}>
									"{c.q}"
								</Typography>
								<Divider sx={{ mb:1.5 }} />
								<Typography variant="body2" sx={{ opacity:0.75, lineHeight:1.8 }}>{c.a}</Typography>

								{/*See full answer button*/}
								<Box sx={{ mt:2, display:'flex', justifyContent:'flex-end' }}>
									<Button size="small" onClick={()=>window.dispatchEvent(new CustomEvent('navigateTab',{detail:'Why CRKL'}))} sx={{ textTransform:'none' }}>
										See full answer
									</Button>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>

				<Box sx={{ mt:6, p:4, borderRadius:3, background:`linear-gradient(135deg,${PRIMARY}15,${SECONDARY}15)`, border:`1px solid ${PRIMARY}30`, textAlign:"center" }}>
					<Typography sx={{ fontWeight:700, fontSize:"1.05rem", mb:0.5 }}>
						CRKL Inc. has taken full ownership of the concerns and risks associated with outsourcing to India — so that you do not have to.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}

