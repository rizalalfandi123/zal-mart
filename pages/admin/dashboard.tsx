import { NextPage } from "next";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const Dashboard: NextPage = () => {
  return (
    <Grid container direction="row" spacing={2} sx={{ height: "inherit", marginBottom: "0.5rem" }}>
      <Grid xs={3}>
        <Box
          sx={{
            height: "100%",
            backgroundColor: "white",
            boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
            borderRadius: "1rem",
          }}
        >
          Test
        </Box>
      </Grid>
      <Grid xs={9}>
        <Box
          sx={{
            height: "100%",
            backgroundColor: "white",
            boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
            borderRadius: "1rem",
          }}
        >
          Test
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
