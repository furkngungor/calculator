import React, {useState} from "react";

function App() {

  const [state, setState] = useState({
    number1: "",
    number2: "",
    operator: ""
  });

  function handleChange(event) {
    const {value, name} = event.target;

    if (name === "number") {
      setState(prevValue => {
        if (prevValue.operator === "") {
          return {
            number1: prevValue.number1 + value,
            number2: prevValue.number2,
            operator: prevValue.operator
          }
        } else if (prevValue.operator !== "") {
          return {
            number1: prevValue.number1,
            number2: prevValue.number2 + value,
            operator: prevValue.operator
          }
        }
        
      });
    } else if (name === "operator") {
      setState(prevValue => {
        return {
          number1: prevValue.number1,
          number2: prevValue.number2,
          operator: value
        };
      })
    }
    event.preventDefault();
  }


  function operation(event) {
    const number1 = Number(state.number1);
    const number2 = Number(state.number2);
    if (state.operator === "+") {
      setState({
        number1: number1 + number2,
        number2: "",
        operator: ""
      });
    } else if (state.operator === "-") {
      setState({
        number1: number1 - number2,
        number2: "",
        operator: ""
      });
    } else if (state.operator === "/") {
      setState({
        number1: number1 / number2,
        number2: "",
        operator: ""
      });
    } else if (state.operator === "x") {
      setState({
        number1: number1 * number2,
        number2: "",
        operator: ""
      });
    }
    event.preventDefault();
  }

  function clear(event) {
    setState({
      number1: "",
      number2: "",
      operator: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      {/* <h1>{state.operator==="" ? state.number1 : state.number2}</h1> */}
      <h1>{state.number1 + state.operator + state.number2}</h1>
        <button onClick={handleChange} value={1} name="number">1</button>
        <button onClick={handleChange} value={2} name="number">2</button>
        <button onClick={handleChange} value={3} name="number">3</button>
        <button className="operator" onClick={handleChange} value={"+"} name="operator">+</button>
        <button onClick={handleChange} value={4} name="number">4</button>
        <button onClick={handleChange} value={5} name="number">5</button>
        <button onClick={handleChange} value={6} name="number">6</button>
        <button className="operator" onClick={handleChange} value={"-"} name="operator">-</button>
        <button onClick={handleChange} value={7} name="number">7</button>
        <button onClick={handleChange} value={8} name="number">8</button>
        <button onClick={handleChange} value={9} name="number">9</button>
        <button className="operator" onClick={handleChange} value={"/"} name="operator">/</button>
        <button onClick={handleChange} value={0} name="number">0</button>
        <button onClick={clear}>AC</button>
        <button onClick={operation}>=</button>
        <button className="operator" onClick={handleChange} value={"x"} name="operator">x</button>
    </div>
  );
}

export default App;
