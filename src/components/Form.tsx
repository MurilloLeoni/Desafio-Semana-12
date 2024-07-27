import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-poppins w-[610px] pl-20 flex flex-col gap-9 items-start"
    >
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
