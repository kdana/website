import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";

const DrawerPull = styled(Box)(({ theme }) => ({
  width: 6,
  height: 30,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  right: 8,
  top: "calc(50% - 15px)",
}));

export default DrawerPull;
