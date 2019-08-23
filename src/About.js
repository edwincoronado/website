import React from "react";
import Link from "./Link";

const About = () => {
  const photoUrl = "https://edwincoronado.com";
  const snUrl = "https://servicenow.com";
  const linkedInUrl = "https://www.linkedin.com/in/edwincoronado/";
  const emailUrl = "mailto:hi@edwincoronado.io";
  const fntUrl = "https://fntlife.com";
  const youTubeUrl = "https://youtube.com/fntlife";

  const h2Base = "text-almost-black-200 tracking-wide font-bold text-5xl";
  const pBase = "font-Rubik text-lg text-justify text-almost-black-100 px-6 py-8";

  return (
    <section className="min-h-screen bg-desert-sand relative py-12 px-10">
      <h2 className={`${h2Base} sm:p-8 sm:text-6xl md:ml-6 md:mt-6 md:text-7xl lg:ml-8 xl:text-8xl xl:pl-16`}>
        ¡Hola!
      </h2>
      <p className={`${pBase } sm:px-10 sm:text-2xl sm:px-12 md:px-16 md:text-3xl xl:text-4xl xl:px-32`}>
        My name is Edwin Coronado. If you're looking for my photography site
        click <Link url={photoUrl}>here</Link>.<br /><br />I am a Computer Engineering and
        Criminal Justice Administration graduate from SDSU and currently a
        Senior UI/UX Quality Engineer at <Link url={snUrl}>ServiceNow</Link>. I also co-founded 
        <Link url={fntUrl}>FNT Life</Link>; a fitness & nutrition
        coaching company and <Link url={youTubeUrl}>YouTube</Link> channel.
        <br />
        <br /> You can find my detailed résumé in my{" "}
        <Link url={linkedInUrl}>LinkedIn profile</Link> and shoot me an
        <Link url={emailUrl}> email</Link> if you have any questions.
        <br />
        <br />
        Looking forward to working with you!
        <br />
        - Edwin
      </p>
    </section>
  );
};

export default About;
