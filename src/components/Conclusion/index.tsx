import complete_icon from "/imgs/icon-complete.svg";

type ConclusionProps = {
  handleFormSubmitted: () => void;
};

export const Conclusion = ({ handleFormSubmitted }: ConclusionProps) => {
  return (
    <div className="flex flex-col items-center gap-8 w-[300px]">
      <img src={complete_icon} alt="complete icon" />
      <h2 className="text-3xl tracking-widest text-veryDarkViolet">
        THANK YOU!
      </h2>
      <p className="text-darkGrayishViolet">We've added your card details</p>
      <button
        onClick={handleFormSubmitted}
        className="bg-veryDarkViolet text-white py-3 rounded-md w-full"
      >
        Continue
      </button>
    </div>
  );
};
