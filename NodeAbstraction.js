
import React from "react";
import { Handle } from "react-flow-renderer";
import "./NodeStyles.css";


const Node = ({ id, type, label, inputs = [], outputs = [] }) => {
  return (
    <div className={`node node-${type}`}>
      <div className="node-header">{label}</div>
      <div className="node-handles">
        {inputs.map((input) => (
          <Handle
            key={input}
            type="target"
            position="left"
            id={input}
            className="handle"
          />
        ))}
        {outputs.map((output) => (
          <Handle
            key={output}
            type="source"
            position="right"
            id={output}
            className="handle"
          />
        ))}
      </div>
      <div className="node-content">
        {type === "text" && <textarea placeholder="Enter text..." />}
      </div>
    </div>
  );
};

// Example: create 5 new nodes using abstraction
export const InputNode = (props) => <Node {...props} type="input" />;
export const OutputNode = (props) => <Node {...props} type="output" />;
export const LLMNode = (props) => <Node {...props} type="llm" />;
export const TextNode = (props) => <Node {...props} type="text" />;
export const CustomNode = (props) => <Node {...props} type="custom" />;

export default Node;
