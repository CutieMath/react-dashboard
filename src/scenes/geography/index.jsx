import Choropleth from "../../components/Choropleth";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Box m="20px">
        <Header title="Choropleth" subtitle="here is your geography graph" />
      </Box>
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        m="20px"
      >
        <Choropleth />
      </Box>
    </Box>
  );
};

export default Geography;
