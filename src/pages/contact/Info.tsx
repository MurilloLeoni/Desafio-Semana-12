
const Info = () => {
  return (
    <div className="grid grid-cols-2 -mt-24 md:mt-0 md:flex md:flex-col gap-10 px-4 md:px-12 md:pl-60">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          className="w-6 h-7"
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-location.png"
          alt="Icon"
        />
        <div className="flex flex-col">
          <h1 className="font-medium text-xl md:text-2xl">Address</h1>
          <p className="text-sm md:text-base">
            236 5th SE Avenue, New
            <br />
            York NY10000, United
            <br />
            States
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          className="w-6 h-7 object-cover"
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-phone.png"
          alt="Icon"
        />
        <div className="flex flex-col">
          <h1 className="font-medium text-xl md:text-2xl">Phone</h1>
          <p className="text-sm md:text-base">
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          className="w-6 h-7"
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-clock.png"
          alt="Icon"
        />
        <div className="flex flex-col">
          <h1 className="font-medium text-xl md:text-2xl">Working Time</h1>
          <p className="text-sm md:text-base">
            Monday-Friday: 9:00 -<br />
            22:00
            <br />
            Saturday-Sunday: 9:00 -<br /> 21:00
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Info;
