import React from "react";
import Title from "./Title";
import About from "./About";
import ScrollReveal from 'scrollreveal'

const App = () => {
  React.useEffect(() => {
    const options = {
      delay: 200,
      reset: true
    };
    ScrollReveal().reveal('h1', options);
    ScrollReveal().reveal('h2', options);
    ScrollReveal().reveal('p', options);
  });
  return (
    <>
      <Title />
      <About />
    </>
  );
};

export default App;
