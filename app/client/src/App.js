import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./Main";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
    );
  }
}

export default App;
