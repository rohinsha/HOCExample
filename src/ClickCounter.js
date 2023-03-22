import Counter from "./Counter";

function ClickCounter(props) {
  return (
    <div>
      <button onClick={props.increment}>
        Clicked button {props.counterVal} times
      </button>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Counter(ClickCounter, 3);
