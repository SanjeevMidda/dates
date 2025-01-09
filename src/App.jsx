import LargeBox from "./components/largeBox";
import SmallBox from "./components/smallBox";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <h1>dates /</h1>

        <div className="boxContainer">
          <LargeBox
            number="1"
            month="JAN"
            colors={["white", "grey", "yellow", "green", "blue", "pink"]}
            gridColumn={[1, 2]}
            gridRow={[1, 3]}
          />
          <SmallBox
            number="2"
            month="FEB"
            colors={["white", "grey", "yellow", "green", "blue", "pink"]}
            gridColumn={[2, 3]}
            gridRow={[1, 2]}
            translate="90"
          />
          <LargeBox
            number="3"
            month="MAR"
            colors={["white", "grey", "yellow", "green", "blue", "pink"]}
            gridColumn={[3, 4]}
            gridRow={[1, 3]}
          />
          <SmallBox
            number="4"
            month="APR"
            colors={["white", "grey", "yellow", "green", "blue", "pink"]}
            gridColumn={[4, 4]}
            gridRow={[1, 2]}
            translate="90"
          />
          <SmallBox
            number="5"
            month="MAY"
            colors={["white", "grey", "yellow", "green", "blue", "pink"]}
            gridColumn={[2, 3]}
            gridRow={[2, 3]}
          />
          <SmallBox
            number="6"
            month="JUN"
            colors={["white", "grey", "yellow", "green", "blue", "pink"]}
            gridColumn={[4, 5]}
            gridRow={[2, 3]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
