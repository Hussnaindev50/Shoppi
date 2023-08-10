import React from "react"
import "./header.css"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
	Container

} from "@mui/material";
const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="head-tool">
          <Container maxWidth="sm">
            {" "}
            <Typography variant="h6">E-Shop</Typography>
          </Container>

          <Container className="container2" maxWidth="sm">
            <Button variant="contained" href="/">
              About
            </Button>
            <Button variant="contained" href="/about">
              Contact
            </Button>
            <Button
              variant="outlined"
              aria-label="outlined button group"
              color="inherit"
              href="/contact"
            >
              login
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
