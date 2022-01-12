import RemoteButton from "./RemoteButton";
import "./App.css";

function App() {
  let buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "HOME",
    "0",
    "@",
    "OPTS",
    "UP",
    "DOWN",
    "LEFT",
    "RIGHT",
  ];

  return (
    <div>
      {buttons.map((result, index) => {
        return (
          <RemoteButton
            // These are props
            number={result}
          />
        );
      })}
    </div>
  );
}

export default App;
