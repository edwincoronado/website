import React from "react";

const Title = () => {
  const baseCss =
    "text-white leading-none font-bold tracking-wider absolute bottom-0 left-0 uppercase";
  return (
    <section className="bg-fixed bg-black h-screen w-screen p-20" id="home">
      <h1 className={`text-4xl pb-20 pl-12 sm:text-5xl sm:pl-16 md:text-6xl md:pl-20 lg:text-8xl lg:pl-20 xl:text-9xl xl:pl-24 text-white ${baseCss}`}>
        Edwin
        <br />
        <span className="text-desert-sand">Coronado</span>
      </h1>
    </section>
  );
};

export default Title;


