import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
// @ts-ignore
import parttern_divider_desktop from "../assets/images/pattern-divider-desktop.svg";
// @ts-ignore
import parttern_divider_mobile from "../assets/images/pattern-divider-mobile.svg";

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
        <div className="parttern_divider_desktop">
          <img src={parttern_divider_desktop} alt="" />
        </div>
        <div className="parttern_divider_mobile">
          <img src={parttern_divider_mobile} alt="" />
        </div>
        <Button onclick={() => Random(1, 224)} />
      </div>
    </div>
  );
};
export { MainContainer };
