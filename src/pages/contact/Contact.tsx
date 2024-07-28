import React from "react";
import Bannerpath from "../../components/banner-path/Bannerpath";
import Info from "./Info";
import FormContact from "../../components/FormContact";

const Contact = () => {
  return (
    <div>
      <Bannerpath />
      <div className="flex flex-col items-center font-poppins mb-36 mt-24">
        <h1 className="font-semibold text-4xl">Get In Touch With Us</h1>
        <p className="text-#9F9F9F w-[650px] text-center  mt-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="grid grid-cols-2">
      <Info />
      <FormContact />
      </div>
    </div>
  );
};

export default Contact;
