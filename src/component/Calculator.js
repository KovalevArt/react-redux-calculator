import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../store/ActionCreator";

//console.log(action[0].addNum(1));

class Calculator extends Component {
  clickHandler = num => {
    if (!this.props.result) {
      this.props.addNum(num);
    } else {
      this.props.clear();
      this.props.addNum(num);
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <div className="string">
            <p>
              {this.props.displayString}
              {this.props.result ? "=" : null}
            </p>
            <p id="display">{this.props.result}</p>
          </div>
          <div>{this.props.displayChar || "0"}</div>
        </div>
        <div className="panel">
          <a
            onClick={() => this.props.clear()}
            id="clear"
            className="btn clear"
          >
            AC
          </a>
          <a
            onClick={() => this.props.divide()}
            id="divide"
            className="btn divide"
          >
            /
          </a>
          <a
            onClick={() => this.props.multiply()}
            id="multiply"
            className="btn multiply"
          >
            *
          </a>
          <a
            onClick={() => this.clickHandler(7)}
            id="seven"
            className="btn seven"
          >
            7
          </a>
          <a
            onClick={() => this.clickHandler(8)}
            id="eight"
            className="btn eight"
          >
            8
          </a>
          <a
            onClick={() => this.clickHandler(9)}
            id="nine"
            className="btn nine"
          >
            9
          </a>
          <a
            onClick={() => this.props.subtract()}
            id="subtract"
            className="btn subtract"
          >
            -
          </a>
          <a
            onClick={() => this.clickHandler(4)}
            id="four"
            className="btn four"
          >
            4
          </a>
          <a
            onClick={() => this.clickHandler(5)}
            id="five"
            className="btn five"
          >
            5
          </a>
          <a onClick={() => this.clickHandler(6)} id="six" className="btn six">
            6
          </a>
          <a onClick={() => this.props.add()} id="add" className="btn add">
            +
          </a>
          <a onClick={() => this.clickHandler(1)} id="one" className="btn one">
            1
          </a>
          <a onClick={() => this.clickHandler(2)} id="two" className="btn two">
            2
          </a>
          <a
            onClick={() => this.clickHandler(3)}
            id="three"
            className="btn three"
          >
            3
          </a>
          <a
            onClick={() => this.clickHandler(0)}
            id="zero"
            className="btn zero"
          >
            0
          </a>
          <a
            onClick={() => this.props.decimal(".")}
            id="decimal"
            className="btn decimal"
          >
            .
          </a>
          <a
            onClick={() => this.props.equals()}
            id="equals"
            className="btn equals"
          >
            =
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayString: state.displayString,
    displayChar: state.displayChar,
    result: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNum: num => dispatch(action.addNum(num)),
    add: () => dispatch(action.add()),
    subtract: () => dispatch(action.subtract()),
    multiply: () => dispatch(action.multiply()),
    divide: () => dispatch(action.divide()),
    equals: () => dispatch(action.equals()),
    clear: () => dispatch(action.clear()),
    decimal: symb => dispatch(action.decimal(symb))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

/*
id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine"
id="add", id="subtract", id="multiply", id="divide"
id="equals" */
