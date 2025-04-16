import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // state variable to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // toggle function to switch dark mode on/off
  function Dark() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // set className based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={Dark}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
