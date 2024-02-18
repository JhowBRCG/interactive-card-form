import front_card from "/imgs/bg-card-front.png";
import { type CardInfo } from "../../@types/CardInfo";

type FrontCardProps = {
  cardInfo: CardInfo;
};

export const FrontCard = ({ cardInfo }: FrontCardProps) => {
  const cardNumberformated = cardInfo.cardNumber.replace(/(.{4})/g, "$1 ");

  return (
    <div className="relative before:content-[''] before:absolute before:bg-cardLogo before:bg-no-repeat before:bg-contain before:w-[50px] lg:before:w-[84px] before:h-[47px] before:left-8 before:top-6 overflow-hidden">
      <div className="text-white absolute inset-0 mx-auto mt-auto mb-5 px-8 h-fit flex flex-col gap-3 lg:gap-5">
        <p className="text-base lg:text-2xl tracking-widest">
          {cardNumberformated}
        </p>
        <div className="flex justify-between text-sm tracking-widest">
          <p>{cardInfo.name.toUpperCase()}</p>
          <p>
            {cardInfo.month}/{cardInfo.year}
          </p>
        </div>
      </div>
      <img src={front_card} alt="front card" className="w-full" />
    </div>
  );
};
