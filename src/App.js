import React from "react";
import Menu from "./Menu";
import Title from "./Title";
import About from "./About";

const App = () => {

  const [state, setState] = React.useState({
    activePage: 0
  });

  const handlePageChange = page => {
    console.log(state);
    setState({...state, activePage: page});
  }

  return (
    <Menu handlePageChange={handlePageChange} activePage={state.activePage}>
      <Title />
      <About />
    </Menu>
  );
};

export default App;
