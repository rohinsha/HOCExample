import Counter from "./Counter";

function HoverComp(props) {
  return (
    <div>
      <button onClick={props.increment}>
        Clicked button {props.counterVal} times
      </button>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Counter(HoverComp, 5);
