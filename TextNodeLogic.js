
import React, { useState, useEffect } from "react";
import { Handle } from "react-flow-renderer";
import "./NodeStyles.css";

const TextNodeLogic = ({ id, label }) => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);


  useEffect(() => {
    const matches = text.match(/{{\s*[\w]+\s*}}/g) || [];
    const uniqueVars = [...new Set(matches.map((v) => v.replace(/[{}]/g, "").trim()))];
    setVariables(uniqueVars);
  }, [text]);

  return (
    <div className="node node-text">
      <div className="node-header">{label}</div>
      <div className="node-handles">
        {variables.map((v) => (
          <Handle key={v} type="target" position="left" id={v} className="handle" />
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here with {{variables}}..."
        style={{ minHeight: "50px", width: "100%" }}
      />
    </div>
  );
};

export default TextNodeLogic;
