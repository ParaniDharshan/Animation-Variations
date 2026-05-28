import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { PRIMARY } from "../../Constants.js";

export default function MissionVision() {
	return (
		<Box sx={{ py:{ xs:8,md:10 }, overflow:"hidden" }}>
			<Container maxWidth="lg">
				<Grid container sx={{ borderRadius:3, overflow:"hidden", boxShadow:`0 16px 60px ${PRIMARY}20` }}>
					<Grid item xs={12} md={6}
						sx={{ background:`linear-gradient(135deg,${PRIMARY},#145e8e)`, p:{ xs:5,md:7 }, color:"#fff" }}>
						<Typography sx={{ fontWeight:800, fontSize:"0.75rem", letterSpacing:2, mb:3, opacity:0.7, textTransform:"uppercase" }}>
							Our Mission
						</Typography>
						<Typography variant="h5" sx={{ lineHeight:1.7, fontStyle:"italic" }}>
							To provide cost-effective, high-quality, and reliable business outsourcing — delivered in a timely and secure manner, consistently meeting the needs and expectations of our clients.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}
						sx={{ background:(t) => t.palette.mode==="dark"?"#0d2137":"#f8fcff", p:{ xs:5,md:7 } }}>
						<Typography sx={{ fontWeight:800, fontSize:"0.75rem", letterSpacing:2, mb:3, opacity:0.6, textTransform:"uppercase", color:PRIMARY }}>
							Our Vision
						</Typography>
						<Typography variant="h5" sx={{ lineHeight:1.7, fontStyle:"italic", color:PRIMARY }}>
							To build an outsourcing ecosystem where capability, security, and dependability converge — creating lasting value for businesses, teams, and the regions we serve.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
