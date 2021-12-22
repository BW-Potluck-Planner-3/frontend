import React from "react";
import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Potlucks = (props) => {
  const token = localStorage.getItem("token");

  const [potlucks, setPotlucks] = useState([]);
  const [usernames, setUsernames] = useState([]);
  console.log(potlucks);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/potlucks/`)
      .then((resp) => {
        setPotlucks(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);



  return (
    <div>
      <br></br>
      <h1>{props.name.slice(0, -1)}'s Potlucks</h1>
      <br></br>
      {potlucks.map((p) => {
        return (
            <div key={p.potluck_id}> 
            <h3>{p.potluck_name}</h3> <br></br>
            Location: {p.location} <br></br>
            {p.date} <br></br>
            {p.time} <br></br>

            <hr></hr>

           

    
            </div>
        );
      })}
    </div>
  );
};

export default Potlucks;
