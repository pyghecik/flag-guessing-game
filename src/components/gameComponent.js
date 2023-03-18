import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Game() {
  // UseState
  const [countries, setCountries] = useState([]);
  const [correctOption, setCorrectOption] = useState([]);
  const [flagImage, setFlagImage] = useState("");
  const [points, setPoints] = useState(0);
  const [flagsShowed, setFlagsShowed] = useState(1);
  const [isGreen, setGreen] = useState(false);
  // UseState End

  // Fetching Api
  const fetchData = async () => {
    try {
      const Data = await axios.get(`https://restcountries.com/v3.1/all`);
      return Data.data;
    } catch (err) {
      console.log(err);
    }
  };
  // Fetching Api End

  // Functions

  // Random Int
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  // Setting Data
  async function setResultsOfData() {
    let arrOfFlags = await fetchData();
    let randomIds = [];
    let countries = [];

    // Pushing Ids of our countries
    const randomNumber = getRandomInt(247);
    for (let x = 0; x < 3; x++) {
      randomIds.push(randomNumber + x);
    }

    // Pushing objects with Ids from randomIds
    for (let y = 0; y < randomIds.length; y++) {
      countries.push(arrOfFlags[randomIds[y]]);
    }

    let correctOpt = countries[getRandomInt(3)];

    setCountries(countries); // Our 3 countries
    setCorrectOption(correctOpt); // Our Correct Option
    setFlagImage(correctOpt.flags.svg); // Our flag image
  }
  // Styling button on hover
  function setButtonStyle() {
    if (isGreen) setGreen(false);
    else setGreen(true);
  }

  // Functions End

  // Calling function
  useEffect(() => {
    SetButtonStyling(buttonStylingGray);
    setResultsOfData();
  }, [points]);
  // Calling Function End

  // Variables

  // Button Styling
  const buttonStylingGray =
    " truncate bg-background-gray border-2 border-border-gray text-border-gray rounded-md pl-2 pr-2 mr-4 ml-4 w-56 h-12 transition ease-in-out duration-300";
  const buttonStylingGreen =
    " truncate bg-background-green border-2 border-border-green text-border-green rounded-md pl-2 pr-2 mr-4 ml-4 w-56 h-12 transition ease-in-out duration-300";
  const buttonStylingRed =
    " truncate bg-background-red border-2 border-border-red text-border-red rounded-md pl-2 pr-2 mr-4 ml-4 w-56 h-12 transition ease-in-out duration-300";
  const [buttonStyling, SetButtonStyling] = useState(buttonStylingGray);
  // Button Styling End

  const goodAnswer = points + 1;
  const badAnswer = points + 0.1;

  let showScore = null;
  let finalScore = (Math.floor(points) / 10) * 100;

  if (flagsShowed >= 10) {
    showScore = (
      <div>
        <h1 className=" text-3xl text-background-gray m-6">
          [{finalScore}% of your answers were good!]
        </h1>
        <Link href="/Info">
          <button
            onMouseOver={setButtonStyle}
            onMouseLeave={setButtonStyle}
            className={isGreen ? buttonStylingGreen : buttonStylingGray}
          >
            Restart
          </button>
        </Link>
      </div>
    );
  }
  // Variables End
  if (flagsShowed !== 10) {
    return (
      <div className=" grid place-content-center text-center mt-32">
        <img
          src={flagImage}
          alt="Image of Flag"
          className=" m-10 h-96 w-[44rem] rounded-lg "
        ></img>
        <h1 className=" opacity-10 mb-3">What country is this flag!</h1>
        <div className=" mt-4">
          {countries.map((country) => {
            return (
              <button
                onClick={() => {
                  if (country.name.common === correctOption.name.common) {
                    SetButtonStyling(buttonStylingGreen);
                    setTimeout(() => {
                      setPoints(goodAnswer);
                      setFlagsShowed(flagsShowed + 1);
                    }, 800);
                  } else {
                    SetButtonStyling(buttonStylingRed);
                    setTimeout(() => {
                      setPoints(badAnswer);
                      setFlagsShowed(flagsShowed + 1);
                    }, 800);
                  }
                }}
                className={buttonStyling}
                key={country.name.common}
              >
                {country.name.common}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" grid place-content-center text-center mt-80">
        {showScore}
      </div>
    );
  }
}

export default Game;
