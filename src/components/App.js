import React, { useState } from "react";
import itemData from "../data/items"
import ShoppingList from "./ShoppingList";
import Head from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);

  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Head  isDarkMode = {isDarkMode} onDarkModeClick = {onDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
