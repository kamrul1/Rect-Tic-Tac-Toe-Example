import React from "react";
import "./styles.css";

export function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBroadRow(fullGrid) {
    return (
      <div className="board-row">
        {fullGrid.splice(0, 3).map(x => this.renderSquare(x))}
      </div>
    );
  }

  render() {
    let fullGrid = [...Array(10).keys()];

    return (
      <div>
        {this.renderBroadRow(fullGrid)}
        {this.renderBroadRow(fullGrid)}
        {this.renderBroadRow(fullGrid)}
      </div>
    );
  }
}
