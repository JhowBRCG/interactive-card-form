import { BackCard } from "../BackCard";
import { FrontCard } from "../FrontCard";
import { type CardInfo } from "../../@types/CardInfo";

type CardsProps = {
  cardInfo: CardInfo;
};

export const Cards = ({ cardInfo }: CardsProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-col lg:gap-8">
      <div className="max-w-[300px] lg:max-w-[447px] z-10 -translate-x-9 -translate-y-14 lg:-translate-x-9 lg:-translate-y-0 overflow-hidden rounded-2xl shadow-2xl ">
        <FrontCard cardInfo={cardInfo} />
      </div>
      <div className="max-w-[300px] lg:max-w-[447px] translate-x-9 translate-y-2 lg:translate-x-9 lg:translate-y-0 overflow-hidden rounded-2xl shadow-2xl">
        <BackCard cardInfo={cardInfo} />
      </div>
    </div>
  );
};
