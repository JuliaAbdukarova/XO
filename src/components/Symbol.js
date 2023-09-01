import React, { Component } from "react";


class Symbol extends Component {
  render() {
    return <div className="flex justify-center items-center">{this.props.value}</div>;
  }
}

export default Symbol;