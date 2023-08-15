import { useState } from "react"
import { useNavigate } from "react-router-dom";
import React from "react"; import Avatar from "@mui/material/Avatar";
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
import { FormGroup } from "@mui/material";
import axios from "axios"

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")
	const [isSeller, setIsSeller] = useState(false);
	 const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.set("email", email);
		formData.set("password", password);
		if (isSeller === true) {
			try {
				setLoading(true);
				const response = await axios.post(
					"/seller/login",
					formData,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				setLoading(false);
				console.log("Response from server:", response.data);
				localStorage.setItem("token", response.data.token);
				navigate("/");
			} catch (error) {
				setLoading(false);
				console.error("Login Failed due to invalid credentials", error.message);         
			}
		} else {
			try {
				const response = await axios.post(
					"/user/login",
					formData,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				console.log("user login successfuly:", response.data);
				localStorage.setItem("token", response.data.token);
				navigate("/");
			} catch (error) {
				console.error("Error in registration:", error);
			}
		}
	}
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Login as a Seller"
                onChange={() => setIsSeller(!isSeller)}
              />
            </FormGroup>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}