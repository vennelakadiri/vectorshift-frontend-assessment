
import axios from "axios";

export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await axios.post("http://localhost:8000/pipelines/parse", {
      nodes,
      edges,
    });

    const { num_nodes, num_edges, is_dag } = response.data;

    alert(
      `Pipeline submitted successfully!\n\n` +
      `Number of Nodes: ${num_nodes}\n` +
      `Number of Edges: ${num_edges}\n` +
      `Is DAG: ${is_dag ? "Yes" : "No"}`
    );
  } catch (error) {
    console.error("Error submitting pipeline:", error);
    alert("Failed to submit pipeline. Check console for details.");
  }
};
