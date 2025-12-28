from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from collections import defaultdict, deque

app = FastAPI()

class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

def is_dag(nodes, edges):
    adj_list = defaultdict(list)
    in_degree = {node['id']: 0 for node in nodes}

    for edge in edges:
        adj_list[edge['source']].append(edge['target'])
        in_degree[edge['target']] += 1

    queue = deque([nid for nid, deg in in_degree.items() if deg == 0])
    visited = 0

    while queue:
        node = queue.popleft()
        visited += 1
        for neighbor in adj_list[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(nodes)

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges)
    }
