import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import "./signup.css";
import { FormGroup } from "@mui/material";
function SignUp() {
	  const [isSeller, setIsSeller] = useState(false);
    const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("firstName", firstName);
		formData.append("email", email);
		formData.append("password", password);
		if (isSeller === true) {
			try {
				setLoading(true);
				const response = await axios.post(
          "/seller/signup",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
				setLoading(false);
				console.log("Response from server:", response.data);
				navigate("/login");
			} catch (error) {
				setLoading(false);
				console.error("Error:", error.message);
              
			}
		} else { 
		try {
			const response = await axios.post(
        "/user/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
			console.log("user register successfuly:", response.data);
			navigate("/login");
		} catch (error) {
			console.error("Error in registration:", error);
		}
	}
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Signup as a Seller"
                  onChange={() => setIsSeller(!isSeller)}
                />
              </FormGroup>
            </Grid>
          </Grid>

          <Button
            className="btn"
            type="submit"
            fullWidth
            variant="contained"
						sx={{ mt: 3, mb: 2 }}
						disabled={loading}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export default SignUp;
