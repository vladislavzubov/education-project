import React, { Component } from 'react';
import Menu from '../component/Menu/Menu';
import helperMenu from '../helper/helperMenu';
class Probe extends Component {
  render() {
    const props = helperMenu();

    return <Menu categories={props} />;
  }
}

export default Probe;
