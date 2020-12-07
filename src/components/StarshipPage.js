import React from "react";
import {Link} from "react-router-dom"

const StarshipPage = (params) => {
  console.log(params.location.state.data);
  let shipInfo = params.location.state.data;
  
  return (
    <div className="container" >
      <div  className="center-align" >
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{shipInfo.name}</span>
              <li className="divider"></li>
              <li>Starship Class: {shipInfo.starship_class}</li>
              <li>Cost in Credits: {shipInfo.cost_in_credits}</li>
              <li>Hyperdrive Rating: {shipInfo.hyperdrive_rating}</li>
            </div>
            <div className="card-action">
                <Link to='/'>Home</Link>
            </div>
          </div>
        </div>
        </div>
      {/* MGLT: "60"
cargo_capacity: "3000000"
consumables: "1 year"
cost_in_credits: "3500000"
created: "2014-12-10T14:20:33.369000Z"
crew: "30-165"
edited: "2014-12-20T21:23:49.867000Z"
films: (3) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"]
hyperdrive_rating: "2.0"
length: "150"
manufacturer: "Corellian Engineering Corporation"
max_atmosphering_speed: "950"
model: "CR90 corvette"
name: "CR90 corvette"
passengers: "600"
pilots: []
starship_class: "corvette" */}
    </div>
  );
};

export default StarshipPage;
