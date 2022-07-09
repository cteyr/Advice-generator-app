import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";

const MainContainer = () => {
  const [Response, setResponse] = useState("");

  const HandelResponse = async (slip_id: number) => {
    const promise = axios.get(`	https://api.adviceslip.com/advice/${slip_id}`);
    const response = await (await promise).data.slip;
    setResponse(response.advice);
  };

  const Random = (min: number, max: number) => {
    const numRandom = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("num" + numRandom);
    HandelResponse(numRandom);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h5>ADVICE #123</h5>
        <div className="text-container">"{Response}"</div>
        <Button onclick={() => Random(1, 224)} />
      </div>
    </div>
  );
};
export { MainContainer };
