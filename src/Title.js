import React from "react";

const Title = () => {
  const h1Base =
    "font-Inter-Bold text-white leading-none tracking-widest absolute bottom-0 left-0 uppercase";
  return (
    <section className="bg-fixed bg-almost-black-100 h-screen w-screen" id="home">
      <h1 className={`${h1Base} text-4.5xl mb-12 pl-12 sm:text-5xl sm:pl-16 md:text-6xl md:pl-20 lg:text-8xl lg:pl-20 xl:text-9xl xl:pl-24 text-white`}>
        Edwin
        <br />
        <span className="text-desert-sand">Coronado</span>
      </h1>
    </section>
  );
};

export default Title;


