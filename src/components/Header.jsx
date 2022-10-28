import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const capitalise = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title.toUpperCase()}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[500]}>
        {capitalise(subtitle)}
      </Typography>
    </Box>
  );
};

export default Header;
