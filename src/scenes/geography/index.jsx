import Choropleth from "../../components/Choropleth";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Geography = () => {
  return (
    <Box>
      <Box m="20px">
        <Header title="Choropleth" subtitle="here is your geography graph" />
      </Box>
      <Box height="75vh">
        <Choropleth />
      </Box>
    </Box>
  );
};

export default Geography;
