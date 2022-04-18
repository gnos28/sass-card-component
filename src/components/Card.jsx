import React from "react";
import "../style/Card.scss";

function Card() {
  return (
    <div className="card">
      <div className="cardMain">
        <img src="https://picsum.photos/200/300" alt="lorem picsum" />
        <div className="cardInfo">
          <h1>Rozes</h1>
          <h2>Under the grave</h2>
          <h2>(2016)</h2>
        </div>
      </div>
      <div className="cardBottom">
          <span>Rate this album</span>
          <div className="rating">
              <img className="emptyStar" src="../../assets/star.png" alt="empty star"/>
              <img className="emptyStar" src="../../assets/star.png" alt="empty star"/>
              <img className="emptyStar" src="../../assets/star.png" alt="empty star"/>
              <img className="emptyStar" src="../../assets/star.png" alt="empty star"/>
              <img className="emptyStar" src="../../assets/star.png" alt="empty star"/>
          </div>
      </div>
    </div>
  );
}

export default Card;
