import back_card from "/imgs/bg-card-back.png";
import { type CardInfo } from "../../@types/CardInfo";

type BackCardProps = {
  cardInfo: CardInfo;
};

export const BackCard = ({ cardInfo }: BackCardProps) => {
  return (
    <div className="relative">
      <p className="absolute text-sm lg:text-base inset-0 m-auto mr-9 lg:mr-16 h-fit w-fit text-white tracking-widest">
        {cardInfo.cvc}
      </p>
      <img src={back_card} alt="front card" />
    </div>
  );
};
