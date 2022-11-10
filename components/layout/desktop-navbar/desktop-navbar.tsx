import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

import { Link, Button } from "components";
import { UserMenu } from "./user-menu";
import {
  searchFieldStyle,
  searchIconStyle,
  buttonCategoriesStyle,
  navbarBrandStyle,
  navbarContainerStyle,
  rightContentStyle,
  searchbarStyle,
} from "./desktop-navbar.style";

const SearchFieldInputProps: Partial<OutlinedInputProps> = {
  endAdornment: (
    <InputAdornment position="end">
      <IconButton sx={searchIconStyle}>
        <SearchIcon fontSize="inherit"/>
      </IconButton>
    </InputAdornment>
  ),
  sx: searchFieldStyle,
  inputProps: {
    style: { padding: "13px 14px" },
  },
};

export const DesktopNavbar = () => {
  return (
    <Box sx={navbarContainerStyle}>
      <Box
        sx={{
          width: "100%",
          marginLeft: "1rem",
          marginRight: "1rem",
          borderRadius: "1rem",
          backgroundColor: "white",
          boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography sx={navbarBrandStyle}>ZAL MART</Typography>
          </Link>
          <Box sx={searchbarStyle}>
            <Button variant="outlined" size="small" sx={buttonCategoriesStyle}>
              Categories
            </Button>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={SearchFieldInputProps}
              fullWidth
            />
          </Box>

          <Box sx={rightContentStyle}>
            <UserMenu />
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
};
