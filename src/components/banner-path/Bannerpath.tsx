const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Bannerpath = () => {
  const path = window.location.pathname.split('/').filter(Boolean)
  .map(segment => capitalizeFirstLetter(segment))
  

  return (
    <div className="relative">
      <img className="w-screen mx-auto" src="/src/assets/imgs/Banner-path.png" alt="Banner" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">{path}</h1>
        <h6 className="mt-2">Home {'>'} {path}</h6>
      </div> 
    </div>
  );
};

export default Bannerpath;
