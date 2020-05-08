import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import "./App.css";
import Page from "./containers/Page/Page";

class App extends Component {
  render() {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  }
}

export default App;
