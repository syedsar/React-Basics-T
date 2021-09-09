import React from "react";
// import { ProgressPlugin } from "webpack";
import "./Netflix1.css";
import sData from "./NetflixData";

const Card = (props) => {
  return (
    <div className="main">
      <div className="card">
        <img src={props.imgSrc} />
        <div className="container">
          <h6>{props.name}</h6>
          <p>{props.title}</p>
          <a href={props.button} target='_blank'> 
          <button>Watch</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Netflix1 = () => {
//   console.log(sData[0]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>

      {
          sData.map((val, index) => <Card key = {index} imgSrc={val.imgSrc} name={val.name} title={val.title} button={val.button} />)
      }
        {/* <Card
          imgSrc={sData[0].imgSrc}
          name={sData[0].name}
          title={sData[0].title}
          button={sData[0].button}
        />
        <Card 
            imgSrc={sData[1].imgSrc}
          name={sData[1].name}
          title={sData[1].title}
          button={sData[1].button}
        />
        <Card 
            imgSrc={sData[2].imgSrc}
          name={sData[2].name}
          title={sData[2].title}
          button={sData[2].button}
        />
        <Card 
        imgSrc={sData[3].imgSrc}
          name={sData[3].name}
          title={sData[3].title}
          button={sData[3].button}
          /> */}
      </div>
    </>
  );
};

export default Netflix1;
