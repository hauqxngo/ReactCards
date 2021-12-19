import React, { useState } from "react";
import useFlip from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipIsFacingUp] = useFlip(true);
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
