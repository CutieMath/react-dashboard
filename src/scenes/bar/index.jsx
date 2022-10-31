import React from "react";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box>
      <Box m="20px">
        <Header title="bar chart" subtitle="Here is your bar chart x" />
      </Box>
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
