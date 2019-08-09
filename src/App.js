import React from "react";
import title from "./assets/images/title.svg";

const App = () => {
  return (
    <>
      <img
        className="bg-black object-center h-screen px-20 md:px-32 xl:px-32"
        src={title}
      />
      <div className="bg-desert-sand w-max h-auto">
        <h1 className="font-sans text-2xl sm:text-3xl lg:text-6xl text-center py-12">
          Website Under Construction
        </h1>
        <h6 className="font-sans px-6 text-m word-break lg:text-3xl text-center pb-12">
          Visit my{" "}
          <a
            className="text-blue-700 font-medium"
            href="https://edwincoronado.com"
          >
            photography site
          </a>{" "}
          or my{" "}
          <a
            className="text-blue-700 font-medium"
            href="https://www.linkedin.com/in/edwincoronado/"
          >
            LinkedIn profile
          </a>{" "}
          in the meantime 😊
        </h6>
      </div>
    </>
  );
};

export default App;
