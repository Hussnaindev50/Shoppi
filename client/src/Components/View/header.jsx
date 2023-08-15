import React from "react";
import "./header.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar className="head-tool">
          <Container>
            {" "}
            <Typography variant="h6">E-Shop</Typography>
          </Container>

          <Box className="btn-con" width="sm">
            <Button
              variant="outlined"
              aria-label="outlined button group"
              color="inherit"
              href="/"
            >
              About
            </Button>
            <Button
              variant="outlined"
              aria-label="outlined button group"
              color="inherit"
              href="/contact"
            >
              Contact
            </Button>
            <Button
              className="btn"
              variant="outlined"
              aria-label="outlined button group"
              color="inherit"
              href="/login"
            >
              login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
