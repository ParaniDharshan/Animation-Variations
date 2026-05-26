import { Fab, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
 
const GmailButton = () => {
  const handleMailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=lva7th@gmail.com&su=Enquiry%20regarding%20service",
      "_blank"
    );
  };
 
  return (
<Tooltip title="Mail us" placement="left">
<Fab
        onClick={handleMailClick}
        aria-label="Send email"
        sx={{
          position: "fixed",
          bottom: "90px",
          right: "32px",
          backgroundColor: "#1d89c8",
          color: "#fff",
          width: 48,
          height: 48,
          "&:hover": {
            backgroundColor: "#fff",
          color: "#1d89c8",
          },
          zIndex: 1000,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
        }}
>
<EmailIcon sx={{ fontSize: 26 }} />
</Fab>
</Tooltip>
  );
};
 
export default GmailButton;