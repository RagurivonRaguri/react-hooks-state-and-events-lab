import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [appColor, setColor] = useState(true);

  function handleLighting() {
    setColor(!appColor)
  }

  const appClass = appColor ? "App light" : "App dark";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleLighting}>{appColor? "Dark Mode" :  "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
