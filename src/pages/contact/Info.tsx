import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col gap-10 pl-60">
      <div className="flex">
        <img
          className="w-6 h-7"
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-location.png"
          alt="Icon"
        />
        <div className="flex flex-col ml-7">
          <h1 className="font-medium text-2xl ">Address</h1>
          <p>
            236 5th SE Avenue, New
            <br />
            York NY10000, United
            <br />
            States
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          className="w-6 h-7 object-cover"
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-phone.png"
          alt="Icon"
        />
        <div className="flex flex-col ml-7">
          <h1 className="font-medium text-2xl">Phone</h1>
          <p>
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          className="w-6 h-7"
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-clock.png"
          alt="Icon"
        />
        <div className="flex flex-col ml-7">
          <h1 className="font-medium text-2xl">Working Time</h1>
          <p>
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
