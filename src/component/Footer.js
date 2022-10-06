import React from "react";
import './Footer.css';
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="footer" style={{ marginTop: "20px" }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 1, sm: 5 }}
        bgcolor=""
        color="black"
        borderTop="4px solid #c1c1c1"
      >
        <Box maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={2.3}>
              <Box style={{ fontWeight: "600" }}>SARVAM SEFTY</Box>
              <Box>About Us</Box>
              <Box>Careers</Box>
              <Box>Contact Us</Box>
              <Box>Testimonials</Box>
              <Box>Blog</Box>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Box style={{ fontWeight: "600" }}>HELP</Box>
              <Box>Track my order</Box>
              <Box>Buying Guid</Box>
              <Box>FAQS</Box>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Box style={{ fontWeight: "600" }}>SERVAM OWN</Box>
              <Box>Popular Search</Box>
              <Box>Best Deals</Box>
              <Box>Online Assist</Box>
              <Box>Industry Store</Box>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Box style={{ fontWeight: "600" }}>MISK</Box>
              <Box>Bulk Enquiry</Box>
              <Box>Sarvam Sefty Bussiness</Box>
              <Box>Supplier Central</Box>
            </Grid>

            <Grid item xs={10} sm={2}>
              <Box style={{ fontWeight: "600" }}>Messages</Box>
              <span><FacebookIcon  /></span>
              <span><InstagramIcon /></span>
              <span><YouTubeIcon /></span>
              <span><WhatsAppIcon /></span>
              <span><TwitterIcon /></span>
              <span><LinkedInIcon /></span>
              
            </Grid>
          </Grid>
          {/* <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Material UI Workshop &reg; {new Date().getFullYear()}
          </Box> */}
        </Box>
      </Box>
      <div
        style={{
          borderBottom: "4px solid #c1c1c1",
          borderTop: "4px solid #c1c1c1",
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            marginLeft: "80px",
            fontSize: 9,
          }}
        >
          TERMS OF USE
        </span>
        <span
          style={{
            marginLeft: "20px",
            fontSize: 9,
          }}
        >
          COPYRIGHT
        </span>
        <span
          style={{
            marginLeft: "20px",
            fontSize: 9,
          }}
        >
          PRIVACY POLICY
        </span>
        <span
          style={{
            marginLeft: "20px",
            fontSize: 9,
          }}
        >
          COMPLIANCE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
