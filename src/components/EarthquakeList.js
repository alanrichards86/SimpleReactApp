import import React, { Component } from 'react';
import moment from 'moment';
import EarthquakesArray from '../data/earthquakes.js';


class EarthquakeList extends Component {
  render(){
    let quakes = EarthquakesArray.map((earthquakeObject) => {}


    )
    return{
  <div className="col-sm-6" key={1500044263000}>
    <div className="card" >
      <div className="card-block">
        <h4 className="card-title">{"9km NE of Aguanga, CA"}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Magnitude: {0.52}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Time: {moment(FILL_ME_IN_WITH_THE_TIME).format('llll')}</h6>
        <p className="card-text">Coordinates: {FILL_ME_IN_WITH_THE_COORDINATES}</p>

        <a href={FILL_ME_IN_WITH_THE_URL} className="card-link">USGS Event Link</a>

      </div>
    </div>
  </div>
    };
  }
}





export default EarthquakeList;
