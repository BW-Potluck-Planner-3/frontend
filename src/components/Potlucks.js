import React from "react";
import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Accordion } from "react-bootstrap";

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
          <div className='potluck-wrapper shadow-lg bg-light'>
            {/* Potluck details */}
            <div key={p.potluck_id}> 
              <h3 className='text-primary'>{p.potluck_name}</h3> <br></br>
              Location: {p.location} <br></br>
              {p.date} <br></br>
              {p.time} <br></br>
            </div>
            <div className='potluck-acc-wrapper'>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Add a Guest</Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <input 
                        name='guest'
                        type='text'
                        placeholder='Guest Name'
                      />
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Add a Menu Item</Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <input 
                        name='menuItem'
                        type='text'
                        placeholder='Name of Menu Item'
                      />
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Potlucks;
