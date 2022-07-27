import { Box, Card } from "@mui/material";
import QR from "../assets/image-qr-code.png";

export function Home() {
  return (
    <Card>
      <Box>
        <img src={QR} alt="" />
      </Box>
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </Card>
  );
}
