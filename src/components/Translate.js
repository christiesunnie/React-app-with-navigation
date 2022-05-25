import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const languages = [
  {
    label: "Hindu",
    value: "hi",
  },
  {
    label: "Vietnamese",
    value: "vi",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a language"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
