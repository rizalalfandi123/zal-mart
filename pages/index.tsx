import { NextPage } from "next";

import Grid from "@mui/material/Unstable_Grid2";

import { Banner } from "page-components";
import { DashboardCard } from "components";

const Home: NextPage = () => {
  return (
    <Grid container direction="column" spacing={3} gap="1.2rem">
      <Grid xs={12}>
        <Banner />
      </Grid>
      <Grid xs={12}>
        <DashboardCard />
      </Grid>
      <Grid xs={12}>
        <DashboardCard />
      </Grid>
      <Grid xs={12}>
        <DashboardCard />
      </Grid>
      <Grid xs={12}>
        <DashboardCard />
      </Grid>
      <Grid xs={12}>
        <DashboardCard />
      </Grid>
    </Grid>
  );
};

export default Home;
