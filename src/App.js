import React, { useState } from "react";
import "./styles.css";

const musicDb = {
  IndianPop: [
    { name: "Lucky Ali", rating: "4/5" },
    { name: "Sonu Nigam", rating: "3.5/5" }
  ],

  Bollywood: [
    {
      name: "Arijit Singh",
      rating: "5/5"
    },
    {
      name: "Shreya Ghoshal",
      rating: "4.5/5"
    }
  ],
  classical: [
    {
      name: " Pt. Shiv Kumar Sharma(Santoor Musicians)",
      rating: "5/5"
    },
    {
      name: " Hariprasad Chaurasia (Flute Musicians)",
      rating: "4.5/5"
    }
  ]
};

const musicDbArr = Object.keys(musicDb);

export default function App() {
 
  const [selectedGenre, setSelectedGenre] = useState("classical");

  const genreClickHandler = (genre) => {
    // console.log(genre);
    setSelectedGenre(genre);
  };

  let musicButtons = musicDbArr.map((item) => {
    // console.log(item);
    return (
      <button onClick={() => genreClickHandler(item)} key={item}>
        {item}
      </button>
    );
  });

  let listofMusic = musicDb[selectedGenre].map((music) => (
    <li key={music.name}>
      <div style={{ fontSize: "larger" }}> {music.name} </div>
      <div style={{ fontSize: "smaller" }}> {music.rating} </div>
    </li>
  ));

  return (
    <div className="App">
      <h1>  good music  </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite music. Select a genre to get started{" "}
      </p>
      <div>{musicButtons}</div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>{listofMusic}</ul>
      </div>
    </div>
  );
}

// VISER :- View --> Interact --> State in Event handler --> React to it /Render

  // given classical as inital input as to selcetedgenre = classical tbhi jo slect hua hgoa usko musicdb mein acces kiya jayega and then uss array ko access kiya jayega