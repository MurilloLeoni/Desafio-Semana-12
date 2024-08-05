import Bannerpath from "../../components/banner-path/Bannerpath";
import Info from "./Info";
import FormContact from "../../components/FormContact";

const Contact = () => {
  return (
    <div>
      <Bannerpath />
      <div className="flex flex-col items-center mb-36 mt-10 md:mt-24">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Get In Touch With Us
        </h1>
        <p className="text-#9F9F9F md:w-[650px] text-center mt-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="md:grid md:grid-cols-2">
        <Info />
        <div className="flex">
          <FormContact />
        </div>
      </div>
    </div>
  );
};

export default Contact;
