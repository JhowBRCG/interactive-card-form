import { useState } from "react";
import { type CardInfo } from "./@types/CardInfo";
import { Cards } from "./components/Cards";
import { Form } from "./components/Form";
import { Conclusion } from "./components/Conclusion";
import "./styles/global.css";

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    name: "Your name",
    cardNumber: "0000000000000000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmitted = () => {
    setFormSubmitted((prev) => !prev);
  };

  return (
    <main className="flex items-center justify-center lg:h-screen w-screen bg-bgMainMobile bg-no-repeat bg-contain lg:bg-bgMainDesktop p-4">
      <div className="flex flex-col lg:flex-row items-center w-full justify-evenly">
        <Cards cardInfo={cardInfo} />
        {formSubmitted ? (
          <Conclusion handleFormSubmitted={handleFormSubmitted} />
        ) : (
          <Form
            setCardInfo={setCardInfo}
            handleFormSubmitted={handleFormSubmitted}
          />
        )}
      </div>
    </main>
  );
}

export default App;
