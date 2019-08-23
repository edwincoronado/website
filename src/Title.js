import React from "react";

const Title = () => {
  const h1Css =
    "text-white leading-none font-bolder tracking-widest absolute bottom-0 left-0 uppercase";
  return (
    <section className="bg-fixed bg-black h-screen w-screen" id="home">
      <h1 className={`text-4.5xl mb-12 pl-12 sm:text-5xl sm:pl-16 md:text-6xl md:pl-20 lg:text-8xl lg:pl-20 xl:text-9xl xl:pl-24 text-white ${h1Css}`}>
        Edwin
        <br />
        <span className="text-desert-sand">Coronado</span>
      </h1>
    </section>
  );
};

export default Title;


