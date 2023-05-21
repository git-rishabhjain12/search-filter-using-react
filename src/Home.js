import React from "react";
import userData from "./userData.json";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "@mui/material";
import "./home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [singleUserData, setSingleUserData] = useState(null);

  const handleClick = (item) => {
    setSingleUserData(item);
  };

  return (
    <>
      <div className="container">
        <div className="data">
          <input
            type="text"
            className="searchBox"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <div className="userDetails">
          {userData
            .filter((item) => {
              if (
                searchTerm === "" ||
                item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
              return null; // Return null for filtered out items
            })
            .map((item, index) => {
              return (
                <div key={index} className="user">
                  <p>Name: {item.first_name + " " + item.last_name}</p>
                  <Link>
                    <DoneIcon onClick={() => handleClick(item)} />
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="userData">
          {singleUserData && (
            <div>
              <h2>Selected User:</h2>
              <p>
                <strong>Name: </strong>
                {singleUserData.first_name + " " + singleUserData.last_name}
              </p>
              <p>
                <strong>Email: </strong>
                {singleUserData.email}
              </p>
              <p>
                <strong>Gender: </strong>
                {singleUserData.gender}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
