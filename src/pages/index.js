import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  // State
  const [isGreen, setGreen] = useState(false);
  // State End

  // Button Styles
  const buttonGreen =
    " bg-background-green border-2 border-border-green text-border-green rounded-md w-56 h-12 transition ease-in-out duration-300";
  const buttonGray =
    " bg-background-gray border-2 border-border-gray text-border-gray rounded-md w-56 h-12 transition ease-in-out duration-300";
  // Button Styles End

  // Functions
  function setButtonStyle() {
    if (isGreen) setGreen(false);
    else setGreen(true);
  }
  // Functions End
  return (
    <>
      <Head>
        <title>Flag Guesser 🌍</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=" text-center mt-96">
          <h1 className=" opacity-10 mb-3">[Guess the flag game]</h1>
          <Link href="/Info">
            <button
              onMouseOver={setButtonStyle}
              onMouseLeave={setButtonStyle}
              className={isGreen ? buttonGreen : buttonGray}
            >
              Start
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
