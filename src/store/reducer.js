import * as actionType from "./actionType";

const initialState = {
  displayString: "0",
  displayChar: "",
  result: null,
  checkResult: false,
  isZero: true,
  isDecement: false,
  isSymb: false
};

const reducer = (state = initialState, action) => {
  let symb = "";
  let res = 0;
  let dispStr = "";
  let dispChar = "";
  //console.log(action.num)
  console.log(action);

  switch (action.type) {
    case actionType.ADD_NUMB:
      if (state.isZero) {
        if (state.isSymb) {
          dispStr = state.displayString.concat(action.num);
          dispChar =
            state.displayString[state.displayString.length - 1] == "+" ||
            "-" ||
            "*" ||
            "/" ||
            "="
              ? `${action.num}`
              : "0";
        } else {
          if (state.isDecement) {
            dispStr = state.displayString.concat(action.num);
          } else {
            dispStr = state.displayString
              .slice(0, state.displayString.length - 1)
              .concat(action.num);
          }

          dispChar = state.displayChar
            .slice(0, state.displayChar.length - 1)
            .concat(action.num);
        }
      } else {
        //debugger;
        if (state.result) {
          dispStr = "".concat(action.num);
          dispChar = "".concat(action.num);
        } else {
          dispStr = state.displayString.concat(action.num);
          dispChar = state.displayChar.concat(action.num);
        }
      }

      return {
        ...state,
        displayString: dispStr,
        displayChar: dispChar,
        isSymb: false,
        isZero: state.isZero && action.num === 0 ? true : false
      };

    case actionType.CLEAR:
      return {
        ...initialState
      };

    case actionType.ADD:
      symb = "+";

      res = null;
      dispStr = state.displayString
        .slice(0, state.displayString.length - 1)
        .concat(symb);

      if (state.checkResult) {
        res = `${state.result}+`;
        return {
          ...state,
          displayString: res,
          displayChar: symb,
          result: null,
          checkResult: false,
          isZero: true,
          isSymb: true,
          isDecement: false
        };
      } else {
        return {
          ...state,
          displayString: state.isSymb
            ? dispStr
            : state.displayString.concat(symb),
          displayChar: symb,
          isSymb: true,
          isZero: true,
          isDecement: false
        };
      }

    case actionType.SUBSTRACT:
      symb = "-";

      res = null;
      dispStr = state.displayString
        .slice(0, state.displayString.length - 1)
        .concat(symb);

      if (state.checkResult) {
        res = `${state.result}-`;
        return {
          ...state,
          displayString: res,
          displayChar: symb,
          result: null,
          checkResult: false,
          isZero: true,
          isSymb: true,
          isDecement: false
        };
      } else {
        return {
          ...state,
          displayString: state.isSymb
            ? dispStr
            : state.displayString.concat(symb),
          displayChar: symb,
          isZero: true,
          isSymb: true,
          isDecement: false
        };
      }

    case actionType.MYLTIPLY:
      symb = "*";

      res = null;
      dispStr = state.displayString
        .slice(0, state.displayString.length - 1)
        .concat(symb);

      if (state.checkResult) {
        res = `${state.result}*`;
        return {
          ...state,
          displayString: res,
          displayChar: symb,
          result: null,
          checkResult: false,
          isZero: true,
          isSymb: true,
          isDecement: false
        };
      } else {
        return {
          ...state,
          displayString: state.isSymb
            ? dispStr
            : state.displayString.concat(symb),
          displayChar: symb,
          isZero: true,
          isSymb: true,
          isDecement: false
        };
      }

    case actionType.DIVIDE:
      symb = "/";

      res = null;
      dispStr = state.displayString
        .slice(0, state.displayString.length - 1)
        .concat(symb);

      if (state.checkResult) {
        res = `${state.result}/`;
        return {
          ...state,
          displayString: res,
          displayChar: symb,
          result: null,
          checkResult: false,
          isZero: true,
          isSymb: true,
          isDecement: false
        };
      } else {
        return {
          ...state,
          displayString: state.isSymb
            ? dispStr
            : state.displayString.concat(symb),
          displayChar: symb,
          isZero: true,
          isSymb: true,
          isDecement: false
        };
      }

    case actionType.EQUALS:
      symb = "=";
      dispChar =
        state.displayString[state.displayString.length - 1] == "="
          ? ""
          : state.displayString;
      const result = state.result ? state.result : eval(state.displayString);
      return {
        ...state,
        displayString: state.result ? state.result : dispChar,
        displayChar: result,
        result,
        checkResult: true,
        isDecement: false
      };

    case actionType.DECIMAL:
      symb = ".";

      if (!state.isDecement) {
        dispStr = state.displayString.concat(symb);
      } else {
        if (state.isZero) {
          dispStr = state.displayString.concat(symb);
        }
        dispStr = state.displayString;
      }
      return {
        ...state,
        displayString: dispStr,
        displayChar: symb,
        isDecement: true
      };

    default:
      return state;
  }
};

export default reducer;
