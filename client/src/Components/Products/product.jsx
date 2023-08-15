import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import axios from "axios"
const Products = () => {
	  const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(file);
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await axios.post("/products", formData, {
      headers: {
        "Content-Type": "application/form-data",
      },
    });
    console.log("user register successfuly:", response.data);
  } catch (error) {
    console.error("Error in registration:", error);
  }
};
	return (
    <div>
      <h3>Products</h3>
      <div
        style={{
          textAlign: "center",
          color: "grey",
        }}
      >
        <h4>Jackets</h4>
      </div>

      <center>
        <Card sx={{ width: 300, height: 350 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: "bold",
                color: "brown",
              }}
              color="text.secondary"
            >
              Brown Jacket
            </Typography>
            <Typography></Typography>
          </CardContent>

          <Grid item xs={12}>
            <Button x={{ mt: 3, mb: 2 }}>
              <span>Add Product</span>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                accept="image/*"
                multiple
              />
            </Button>
            <Button component="form" onSubmit={handleSubmit}>
              upload
            </Button>
          </Grid>
          <CardActions>
            <Button
              size="small"
              sx={{
                backgroundColor: "gray",
                color: "white",
                alignItems: "center",
              }}
            >
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </center>
    </div>
  );
}
export default Products
