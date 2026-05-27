import React from "react";
import { Box, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const teamItems = [
	{
		id: "team-1",
		image: new URL("../../assets/Our Team/1.png", import.meta.url).href,
		url: new URL("../../assets/Our Team/1.png", import.meta.url).href,
		height: 900,
		name: "M. Peri Periasamy",
		role: "Founder & CEO",
		email: "team1@crklinc.com",
		linkedinUrl: "https://www.linkedin.com/",
	},
	{
		id: "team-2",
		image: new URL("../../assets/Our Team/2.png", import.meta.url).href,
		url: new URL("../../assets/Our Team/2.png", import.meta.url).href,
		height: 900,
		name: "Beulah Radhakrishnan",
		role: "General Manager",
		email: "team2@crklinc.com",
		linkedinUrl: "https://www.linkedin.com/",
	},
	{
		id: "team-3",
		image: new URL("../../assets/Our Team/3.png", import.meta.url).href,
		url: new URL("../../assets/Our Team/3.png", import.meta.url).href,
		height: 900,
		name: "Saravana Kumar",
		role: "Client Relations",
		category: "Finance",
		email: "team3@crklinc.com",
		linkedinUrl: "https://www.linkedin.com/",
	},
	{
		id: "team-4",
		image: new URL("../../assets/Our Team/4.png", import.meta.url).href,
		url: new URL("../../assets/Our Team/4.png", import.meta.url).href,
		height: 900,
		name: "Bhala Murugan",
		role: "Administration",
		category: "Finance",
		email: "team4@crklinc.com",
		linkedinUrl: "https://www.linkedin.com/",
	},
	{
		id: "team-5",
		image: new URL("../../assets/Our Team/5.png", import.meta.url).href,
		url: new URL("../../assets/Our Team/5.png", import.meta.url).href,
		height: 900,
		name: "Ragul",
		role: "Support",
		category: "Finance",
		email: "team5@crklinc.com",
		linkedinUrl: "https://www.linkedin.com/",
	},
	{
		id: "team-6",
		image: new URL("../../assets/Our Team/7.png", import.meta.url).href,
		url: new URL("../../assets/Our Team/7.png", import.meta.url).href,
		height: 900,
		name: "Vasanth",
		role: "Leadership",
		category: "IT",
		email: "team6@crklinc.com",
		linkedinUrl: "https://www.linkedin.com/",
	},
];

function TeamCard({ name, role, category, email, linkedinUrl }) {
	return (
		<Box
			sx={{
				position: "absolute",
				inset: 0,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "flex-end",
				gap: 2,
				p: 2,
				background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(3, 18, 33, 0.78) 100%)",
				color: "#fff",
				opacity: 0,
				pointerEvents: "none",
				transition: "opacity 0.25s ease, transform 0.25s ease",
				transform: "translateY(8px)",
				".item-wrapper:hover &": {
					opacity: 1,
					pointerEvents: "auto",
					transform: "translateY(0)",
				},
			}}
			onClick={(e) => e.stopPropagation()}
		>
			<Box sx={{ minWidth: 0, flex: 1 }}>
				{category && (
					<Chip
						label={category}
						size="small"
						sx={{
							mb: 1,
							height: 24,
							fontWeight: 700,
							letterSpacing: 0.5,
							textTransform: "uppercase",
							bgcolor: "rgba(255,255,255,0.16)",
							color: "#fff",
							backdropFilter: "blur(10px)",
						}}
					/>
				)}
				{name && (
					<Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.15, mb: 0.4 }}>
						{name}
					</Typography>
				)}
				{role && (
					<Typography variant="body2" sx={{ opacity: 0.9, mb: 1.25 }}>
						{role}
					</Typography>
				)}
			</Box>
			<Stack direction="row" spacing={1} sx={{ flexShrink: 0, alignItems: "center" }}>
					{email && (
						<Tooltip title="Mail">
							<IconButton
								component="a"
								href={`mailto:${email}`}
								onClick={(e) => e.stopPropagation()}
								sx={{
									borderRadius: 999,
									bgcolor: "rgba(255,255,255,0.16)",
									color: "#fff",
									backdropFilter: "blur(10px)",
									width: 42,
									height: 42,
									"&:hover": { bgcolor: "rgba(255,255,255,0.24)" },
								}}
							>
								<EmailIcon sx={{ fontSize: 22 }} />
							</IconButton>
						</Tooltip>
					)}
					{linkedinUrl && (
						<Tooltip title="LinkedIn">
							<IconButton
								component="a"
								href={linkedinUrl}
								target="_blank"
								rel="noreferrer"
								onClick={(e) => e.stopPropagation()}
								sx={{
									borderRadius: 999,
									bgcolor: "rgba(255,255,255,0.16)",
									color: "#fff",
									backdropFilter: "blur(10px)",
									width: 42,
									height: 42,
									"&:hover": { bgcolor: "rgba(255,255,255,0.24)" },
								}}
							>
								<LinkedInIcon sx={{ fontSize: 22 }} />
							</IconButton>
						</Tooltip>
					)}
			</Stack>
		</Box>
	);
}

export default TeamCard;
