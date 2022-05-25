import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  {
    title: "Question 1?",
    content: "Content 1",
  },
  {
    title: "Question 2?",
    content: "Content 2",
  },
  {
    title: "Question 3?",
    content: "Content 3",
  },
];

const options = [
  {
    label: "The color red",
    value: "Red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <div className="ui container">
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>
        {showDropdown ? (
          <Dropdown
            options={options}
            onSelectedChange={setSelected}
            selected={selected}
          />
        ) : null}
      </div>
      <br />
      <div className="ui container">
        <Accordion items={items} />
      </div>
      <br />
      <div className="ui container">
        <Search />
      </div>
    </div>
  );
};

export default App;
