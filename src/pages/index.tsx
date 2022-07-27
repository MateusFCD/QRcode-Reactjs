import { Box, Card } from "@mui/material";
import QR from "../assets/image-qr-code.png";
import { LayoutIMG, LayoutText } from "../theme";

export function Home() {
  return (
    <Card>
      <Box>
        <LayoutIMG>
          <img src={QR} alt="" />
        </LayoutIMG>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <LayoutText>
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </LayoutText>
      </Box>
    </Card>
  );
}
