import { useState } from "react";

const Counter = (WrappedComp, num) => {
  return function Counter(props) {
    const [counterVal, setCounterVal] = useState(0);

    const increment = () => {
      setCounterVal(counterVal + num);
    };

    return (
      <WrappedComp
        counterVal={counterVal}
        increment={increment}
        {...props}
      ></WrappedComp>
    );
  };
};

export default Counter;
