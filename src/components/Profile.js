import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Typography, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
function Profile() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://crud-backend-qw7t.onrender.com/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const Delette = async (id) => {
    await axios
      .delete(`https://crud-backend-qw7t.onrender.com/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {data.map((a) => (
        <Card
          style={{
            width: "800px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CardMedia
            sx={{ height: 400, width: 400 }}
            image={`${a.img}`}
            title={`${a.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${a.name}`}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ height: "100px" }}
            >
              <h3>About:</h3>
              `${a.about}`
            </Typography>

            <Typography gutterBottom variant="body2" component="div">
              <h4>Role:{`${a.role}`}</h4>
            </Typography>

            <Typography gutterBottom variant="body2" component="div">
              <h4>Company:{`${a.company}`}</h4>
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              style={{ overflowWrap: "anywhere" }}
              color="text.secondary"
            >
              Address:{`${a.address}`}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 10px 0px 0px",
            }}
          >
            <Button size="small">
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/edit-user/${a._id}`}
              >
                Edit
              </NavLink>
            </Button>
            <Button size="small" color="error" onClick={() => Delette(a._id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Profile;
