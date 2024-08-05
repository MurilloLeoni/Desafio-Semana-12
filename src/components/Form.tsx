import { useContext, useState } from "react";
import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";
import AppContext from "../contexts/AppContext";

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForms();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext not found");
  }
  const { cartItems } = context;

  const total = cartItems.reduce((total, item) => {
    const itemTotal = item.salePrice * item.quantity;
    return total + itemTotal;
  }, 0);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const onSubmit = (data: FormSchema) => {
    alert("Compra Realizada com sucesso!");
    console.log(data);
  };

  const checkCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("street", data.logradouro);
        setValue("city", data.localidade);
        setValue("province", data.bairro);
        setValue("country", data.uf);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:flex md:mx-auto gap-28 pb-32"
    >
      <div className="flex flex-col gap-9 items-start">
        <h1 className="font-semibold text-4xl">Billing details</h1>
        <div className="flex flex-col gap-8 md:flex-row md:gap-8">
          <div className="flex flex-col w-full md:w-auto">
            <label className="font-medium mb-6" htmlFor="name">
              First Name
            </label>
            <input
              className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
              type="text"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 italic">{errors.name.message}</span>
            )}
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <label className="font-medium mb-6" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
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

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="companyname">
            Company Name (Optional)
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
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

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="zipcode">
            ZIP Code
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
            type="text"
            id="zipcode"
            {...register("zipcode")}
            onBlur={checkCEP}
          />
          {errors.zipcode && (
            <span className="text-red-500 italic">
              {errors.zipcode.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="country">
            Country / Region
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
            type="text"
            id="country"
            {...register("country")}
          />
          {errors.country && (
            <span className="text-red-500 italic">
              {errors.country.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="street">
            Street Address
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
            type="text"
            id="street"
            {...register("street")}
          />
          {errors.street && (
            <span className="text-red-500 italic">{errors.street.message}</span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="city">
            Town / City
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
            type="text"
            id="city"
            {...register("city")}
          />
          {errors.city && (
            <span className="text-red-500 italic">{errors.city.message}</span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="province">
            Province
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
            type="text"
            id="province"
            {...register("province")}
          />
          {errors.province && (
            <span className="text-red-500 italic">
              {errors.province.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="addonaddress">
            Add-on-address
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
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

        <div className="flex flex-col w-full md:w-auto">
          <label className="font-medium mb-6" htmlFor="email">
            Email Address
          </label>
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 italic">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <input
            className="border border-#9F9F9F rounded-[10px] pr-8 pl-2 py-6 w-full md:w-auto"
            type="text"
            id="message"
            {...register("message")}
            placeholder="Additional information"
          />
          {errors.message && (
            <span className="text-red-500 italic">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <div className="px-4 md:px-0">
        <div className="mt-12 mb-8 md:w-[540px]">
          <div className="md:flex md:flex-col md:gap-4">
            <div className="md:flex md:justify-between">
              <h1 className="text-center md:text-left font-medium text-2xl mb-4 md:mb-0">
                Product
              </h1>
              <h1 className="hidden md:block font-medium text-2xl">Subtotal</h1>
            </div>
            <p className="text-#B88E2F font-bold text-2xl -ml-10"></p>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-#9F9F9F "
              >
                <p className="text-#9F9F9F w-64">
                  {item.title}{" "}
                  <span className="text-black"> x {item.quantity}</span>
                </p>
                <p className="text-nowrap text-black">
                  Rp. {item.salePrice * item.quantity}
                </p>
              </div>
            ))}
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rp. {total}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p className="text-#B88E2F font-bold text-2xl">Rp. {total}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-4 mt-6">
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
            <p className="md:w-[570px] font-light text-justify text-#9F9F9F">
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
          <p className="font-light text-justify md:w-[570px]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="px-24 py-4 border border-black rounded-2xl"
            type="submit"
          >
            Place order
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
