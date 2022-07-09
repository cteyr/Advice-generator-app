import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const MainContainer = () => {
  const [Advice, setAdvice] = useState("");
  const [Id, setId] = useState(null);

  const HandelResponse = async (slip_id: number) => {
    const promise = axios.get(`	https://api.adviceslip.com/advice/${slip_id}`);
    const response = await (await promise).data.slip;
    setAdvice(response.advice);
  };

  const Random = (min: number, max: number) => {
    const numRandom = Math.floor(Math.random() * (max - min + 1) + min);
    setId(numRandom);
    HandelResponse(numRandom);
  };

  useEffect(() => {
    Random(1, 224);
  }, []);

  return (
    <div className="main-container">
      <div className="center-container">
        <h5>ADVICE #{Id}</h5>
        <div className="text-container">"{Advice}"</div>
        <Button onclick={() => Random(1, 224)} />
      </div>
    </div>
  );
};
export { MainContainer };
