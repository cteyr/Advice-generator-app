// @ts-ignore
import icon_dice from "../assets/images/icon-dice.svg";

const Button = ({ onclick }: Iporps) => {
  return (
    <button type="button" onClick={onclick}>
      <img src={icon_dice} alt="" />
    </button>
  );
};

type Iporps = {
  onclick?: () => void;
};
export { Button };
