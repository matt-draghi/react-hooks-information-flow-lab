import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* Header */}
      <Header 
        onDarkModeClick={handleDarkModeClick} 
        isDarkMode={isDarkMode}
      />
      {/* Shopping List */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
