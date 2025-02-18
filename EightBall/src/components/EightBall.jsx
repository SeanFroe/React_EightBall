//React import
import React from "react";
import { useState } from "react";
//js file import
import eightBallMsg, { defaultMsg } from "../EightBallMsg";

const EightBall = () => {
  //give a random answer from the EightBall
  const getRandomAnswer = () => {
    const randomIdx = Math.floor(Math.random() * eightBallMsg.length);
    return eightBallMsg[randomIdx];
  };
  //Initializing state of random message
  const [answer, setAnswer] = useState(defaultMsg);

  return (
    <div className="answerField" onClick={() => setAnswer(getRandomAnswer)}>
      <b>{answer.msg}</b>
    </div>
  );
};

export default EightBall;
