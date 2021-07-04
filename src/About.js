import React from "react"
import Link from "./Link"

const About = () => {
  const fntUrl = "https://fntlife.com";
  const uyuyuyUrl = "https://uyuyuy.com";
  const youTubeUrl = "https://youtube.com/fntlife";

  const h2Base =
    "font-Inter-Bold text-almost-black tracking-wide font-bold text-5xl";
  const pBase = "font-Rubik text-lg text-justify text-almost-black px-6 py-8";

  return (
    <section className="min-h-screen bg-desert-sand relative py-12 px-10">
      <h2
        className={`${h2Base} sm:p-8 sm:text-6xl md:ml-6 md:mt-6 md:text-7xl lg:ml-8 xl:text-8xl xl:pl-16`}
      >
        ¡Hola!
      </h2>
      <p
        className={`${pBase} sm:px-10 sm:text-2xl sm:px-12 md:px-16 md:text-3xl xl:text-4xl xl:px-32`}
      >
        My name is Edwin Coronado. I'm a Software Engineer.<br /><br />
        I co-founded{" "}
        <Link url={fntUrl}>FNT Life</Link>; a fitness & nutrition coaching
        company and <Link url={youTubeUrl}>YouTube</Link> channel with over 206K subscribers.
        <br />
        I also co-founded <Link url={uyuyuyUrl}>¡UyUyUy!</Link>; a Mexican-inspired nutritional
        supplements brand with original flavors.
        <br />
        <br />
        Contact me <Link url="mailto:hi@edwincoronado.io">here</Link>.
        <br />- Edwin
      </p>
    </section>
  );
};

export default About;
