import "./styles.css";
import ClickCounter from "./ClickCounter";
import HoverComp from "./HoverComp";

export default function App() {
  return (
    <div className="App">
      <ClickCounter name="rohinsha" />
      <hr />
      <HoverComp name="gajbhiye" />
    </div>
  );
}
