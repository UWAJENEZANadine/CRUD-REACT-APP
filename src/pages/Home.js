import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("http://localhost:3000/products").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:3000/products/${id}`).then(loadUsers());
  }

  return (
    <>
      <div className="data-display">
        {users.map((data, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className="pt-5 ml-5 data-display-card">
            <CardMedia className="card-image"
              component="img"
              alt="green iguana"
              height="40"
              image="https://st3.depositphotos.com/1000471/18826/i/1600/depositphotos_188267206-stock-photo-fresh-dairy-products-ready-for.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card product
              </Typography>

              <Typography className="bg-white border-b-2 border-black">
                <Typography className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900 ">
                  {index + 1}
                </Typography>
                <Typography className="text-xl text-gray-900 font-semibold px-6 py-1 whitespace-nowrap">
                  {data.product}
                </Typography>
                <Typography className="text-xl text-gray-900 font-semibold px-6 py-1 whitespace-nowrap">
                  {data.detail}
                </Typography>
                <Typography className="text-xl text-gray-900 font-semibold px-6 py-1 whitespace-nowrap">
                  {data.code}
                </Typography>
                <Typography className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-1 space-x-4 whitespace-nowrap">
                  <Link
                    to={`/products/${data.id}`}
                    className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                  >
                    VIew
                  </Link>
                  <Link
                    to={`/edit-product/${data.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => deleteUser(data.id)}
                    to={"#"}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg"
                  >
                    Delete
                  </Link>
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;
