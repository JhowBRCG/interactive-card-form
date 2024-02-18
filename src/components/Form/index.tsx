import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { type CardInfo } from "../../@types/CardInfo";

type FormProps = {
  setCardInfo: Dispatch<SetStateAction<CardInfo>>;
  handleFormSubmitted: () => void;
};

export const Form = ({ setCardInfo, handleFormSubmitted }: FormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  console.log(errors);

  function onSubmit<T>(data: T) {
    console.log(data);
    handleFormSubmitted();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name, e.target.value.trim()); // Atualiza o valor do campo no React Hook Form
    setCardInfo((prev) => ({ ...prev, [e.target.name]: e.target.value })); // Atualiza o estado de cardInfo no componente App
  };

  const handleChangeWithoutTrim = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name, e.target.value); // Atualiza o valor do campo no React Hook Form
    setCardInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 lg:w-[400px] "
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className=" text-veryDarkViolet text-xs tracking-widest"
        >
          CARDHOLDER NAME
        </label>
        <input
          {...register("name", {
            required: true,
            pattern: /^[A-Za-z\s]+$/,
          })}
          onChange={handleChangeWithoutTrim}
          id="name"
          type="text"
          placeholder="e.g Jane Appleseed"
          className={`text-veryDarkViolet p-2 px-3 border-solid border-2 border-lightGrayishViolet rounded-lg ${
            errors.name ? "border-red" : "border-lightGrayishViolet"
          }`}
        />
        {errors.name?.type === "required" && (
          <p className="text-xs text-red">This field is required</p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="text-xs text-red">Please enter only letters</p>
        )}
      </div>
      <div className="flex flex-col gap-2 tracking-widest">
        <label
          htmlFor="card-number"
          className=" text-veryDarkViolet text-xs tracking-widest"
        >
          CARD NUMBER
        </label>
        <input
          {...register("cardNumber", {
            required: true,
            pattern: /^[0-9]+$/,
            minLength: 16,
          })}
          onChange={handleChange}
          maxLength={16}
          id="card-number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000 "
          className={`text-veryDarkViolet p-2 px-3 border-solid border-2  rounded-lg  ${
            errors.cardNumber ? "border-red" : "border-lightGrayishViolet"
          }
          `}
        />
        {errors.cardNumber?.type === "required" && (
          <p className="text-xs text-red tracking-normal">
            This field is required
          </p>
        )}
        {errors.cardNumber?.type === "minLength" && (
          <p className="text-xs text-red tracking-normal">Complete the area</p>
        )}
        {errors.cardNumber?.type === "pattern" && (
          <p className="text-xs text-red tracking-normal">
            Wrong format, numbers only
          </p>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
        <div>
          <label
            htmlFor="date"
            className="text-veryDarkViolet text-xs tracking-widest"
          >
            EXP. DATE (MM/YY)
          </label>
          <div className="flex w-full mt-2">
            <input
              {...register("month", {
                required: true,
                minLength: 2,
                pattern: /^[0-9]{2}$/,
              })}
              onChange={handleChange}
              maxLength={2}
              type="text"
              id="date"
              placeholder="MM"
              className={`text-veryDarkViolet p-2 px-3 border-solid border-2 rounded-lg w-full ${
                errors.month ? "border-red" : "border-lightGrayishViolet"
              }`}
            />
            <input
              {...register("year", {
                required: true,
                minLength: 2,
                pattern: /^[0-9]{2}$/,
              })}
              onChange={handleChange}
              maxLength={2}
              type="text"
              id="date"
              placeholder="YY"
              className={`text-veryDarkViolet p-2 px-3 border-solid border-2 rounded-lg w-full ml-2 mr-4  ${
                errors.year ? "border-red" : "border-lightGrayishViolet"
              }`}
            />
          </div>
          {errors.month?.type === "required" ||
          errors.year?.type === "required" ? (
            <p className="text-xs text-red tracking-normal mt-2">
              Can't be blank
            </p>
          ) : null}

          {errors.month?.type === "pattern" ||
          errors.year?.type === "pattern" ? (
            <p className="text-xs text-red tracking-normal mt-2">
              Only numbers, please
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="cvc"
            className=" text-veryDarkViolet text-xs tracking-widest"
          >
            CVC
          </label>
          <input
            {...register("cvc", {
              required: true,
              minLength: 3,
              pattern: /^[0-9]{3}$/,
            })}
            onChange={handleChange}
            maxLength={3}
            type="text"
            id="cvc"
            className={`text-veryDarkViolet p-2 px-3 border-solid border-2 border-lightGrayishViolet rounded-lg mt-2 ${
              errors.cvc ? "border-red" : "border-lightGrayishViolet"
            }`}
            placeholder="e.g. 123"
          />
          {errors.cvc?.type === "required" && (
            <p className="text-xs text-red tracking-normal mt-2">
              Can't be blank
            </p>
          )}
          {errors.cvc?.type === "pattern" && (
            <p className="text-xs text-red tracking-normal mt-2">
              Only numbers, please
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-veryDarkViolet text-white py-3 rounded-md"
      >
        Confirm
      </button>
    </form>
  );
};
