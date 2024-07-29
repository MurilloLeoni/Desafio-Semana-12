import { useState } from "react";
import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex mx-auto gap-28 pb-32"
    >
      <div className="flex flex-col gap-9 items-start">
      <h1 className='font-semibold text-4xl'>Billing details</h1>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <label className="font-medium mb-6" htmlFor="name">
            First Name
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 italic">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-6" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6"
            type="text"
            id="lastname"
            {...register("lastname")}
          />
          {errors.lastname && (
            <span className="text-red-500 italic">
              {errors.lastname.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="companyname">
          Company Name (Optional)
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="companyname"
          {...register("companyname")}
        />
        {errors.companyname && (
          <span className="text-red-500 italic">
            {errors.companyname.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="zipcode">
          ZIP Code
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="zipcode"
          {...register("zipcode")}
        />
        {errors.zipcode && (
          <span className="text-red-500 italic">{errors.zipcode.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="country">
          Country / Region
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="country"
          {...register("country")}
        />
        {errors.country && (
          <span className="text-red-500 italic">{errors.country.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="street">
          Street Address
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="street"
          {...register("street")}
        />
        {errors.street && (
          <span className="text-red-500 italic">{errors.street.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="city">
          Town / City
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="city"
          {...register("city")}
        />
        {errors.city && (
          <span className="text-red-500 italic">{errors.city.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="province">
          Province
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="province"
          {...register("province")}
        />
        {errors.province && (
          <span className="text-red-500 italic">{errors.province.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="addonaddress">
          Add-on-address
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="addonaddress"
          {...register("addonaddress")}
        />
        {errors.addonaddress && (
          <span className="text-red-500 italic">
            {errors.addonaddress.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-medium mb-6" htmlFor="email">
          Email Address
        </label>
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 italic">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <input
          className="border border-#9F9F9F rounded-[10px] pr-80 pl-2 py-6"
          type="text"
          id="message"
          {...register("message")}
          placeholder="Additional information"
        />
        {errors.message && (
          <span className="text-red-500 italic">{errors.message.message}</span>
        )}
      </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-80 mt-12">
          <div className="col-span-1 flex flex-col gap-6">
            <h1 className="font-medium text-2xl">Product</h1>
            <p className="text-#9F9F9F">
              Nome produto <span className="text-black">x1</span>
            </p>
            <p className="">Subtotal</p>
            <p className="">Total</p>
          </div>
          <div className="col-span-1 flex flex-col gap-6 mb-8 text-end">
            <h1 className="font-medium text-2xl">Subtotal</h1>
            <p>Rp. 1.000,00</p>
            <p>Rp. 1.000,00</p>
            <p className="text-#B88E2F font-bold text-2xl -ml-10">
              Rp. 250000,00
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div>
            <label
              className={`flex gap-2 ${
                selectedPaymentMethod === "Direct Bank Transfer"
                  ? "text-black"
                  : "text-#9F9F9F"
              }`}
            >
              <input
                type="radio"
                value="Direct Bank Transfer"
                {...register("paymentMethod")}
                onChange={handlePaymentMethodChange}
              />
              Direct Bank Transfer
            </label>
            <p className="w-[570px] font-light text-justify text-#9F9F9F">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <label
            className={`flex gap-2 ${
              selectedPaymentMethod === "Cash on Delivery"
                ? "text-black"
                : "text-#9F9F9F"
            }`}
          >
            <input
              type="radio"
              value="Cash on Delivery"
              {...register("paymentMethod")}
              onChange={handlePaymentMethodChange}
            />
            Cash on Delivery
          </label>

          <label
            className={`flex gap-2 ${
              selectedPaymentMethod === "Credit Card"
                ? "text-black"
                : "text-#9F9F9F"
            }`}
          >
            <input
              type="radio"
              value="Credit Card"
              {...register("paymentMethod")}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          {errors.paymentMethod && (
            <span className="text-red-500 italic">
              {errors.paymentMethod.message}
            </span>
          )}
          <p className="font-light text-justify w-[570px]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-24 py-4 border border-black rounded-2xl" type="submit">
            Place order
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
