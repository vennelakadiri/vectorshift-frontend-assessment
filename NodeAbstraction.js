import React from "react";
import { Handle } from "react-flow-renderer";
import "./NodeStyles.css";

const Node = ({ id, type, label, variables = [] }) => {
  return (
    <div className={`node node-${type}`}>
      <div className="node-header">{label}</div>
      <div className="node-handles">
        {variables.map((v) => (
          <Handle key={v} type="target" position="left" id={v} className="handle" />
        ))}
      </div>
      {type === "text" && <textarea placeholder="Type here..." style={{ width: "100%", minHeight: "50px" }} />}
    </div>
  );
};

export default Node;



