import React from "react";
import title from "./assets/images/title.svg";

const App = () => {
  return (
    <>
      <img
        className="bg-black object-center h-screen px-20 md:px-32 xl:px-32"
        src={title}
      />
      <div className="bg-desert-sand w-max h-32"></div>
    </>
  );
};

export default App;
