import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

import { Button } from "components";
import { colors } from "@mui/material";

import Table from "./table";
import useWindowDimensions from "./use-window";

export const Products = () => {
  const { height } = useWindowDimensions();
  return (
    <Grid container direction="column">
      <Grid>
        <Box sx={{ justifyContent: "space-between", alignItems: "center", display: "flex" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="h5">Products</Typography>
            <Typography variant="h5" sx={{ color: colors.grey[400] }}>
              20
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField inputProps={{ style: { padding: "10px 14px" } }} size="small" placeholder="Search" />
            <IconButton sx={{ border: `1px solid ${colors.grey[400]}` }}>
              <FilterListRoundedIcon />
            </IconButton>
            <Button variant="contained">Create New</Button>
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Box sx={{ width: "100%", height: `${height - 220}px` }}>
          <Table direction="ltr" />
        </Box>
      </Grid>
    </Grid>
  );
};
