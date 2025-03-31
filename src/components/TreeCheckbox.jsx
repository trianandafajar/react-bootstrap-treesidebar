import { useState, useMemo } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const TreeCheckbox = () => {
  const [checked, setChecked] = useState(["node1.2", "node2.2.2"]);
  const [expanded, setExpanded] = useState(["node1", "node2", "node2.2"]);

  const handleCheck = (checked) => setChecked(checked);
  const handleExpand = (expanded) => setExpanded(expanded);

  const submit = () => {
    const uniqueArray = [...new Set([...checked, ...expanded])];
    console.log(uniqueArray);
  };

  const data = useMemo(
    () => [
      { id: 1, value: "node1", label: "Node 1", parentId: null },
      { id: 2, value: "node1.1", label: "Node 1.1", parentId: 1 },
      { id: 3, value: "node1.2", label: "Node 1.2", parentId: 1 },
      { id: 4, value: "node2", label: "Node 2", parentId: null },
      { id: 5, value: "node2.1", label: "Node 2.1", parentId: 4 },
      { id: 6, value: "node2.2", label: "Node 2.2", parentId: 4 },
      { id: 7, value: "node2.2.1", label: "Node 2.2.1", parentId: 6 },
      { id: 8, value: "node2.2.2", label: "Node 2.2.2", parentId: 6 },
      { id: 9, value: "node2.2.3", label: "Node 2.2.3", parentId: 6 },
    ],
    []
  );

  const buildHierarchy = (data) => {
    const map = new Map();
    data.forEach((node) => {
      map.set(node.id, { ...node, children: [] });
    });

    data.forEach((node) => {
      if (node.parentId) {
        const parent = map.get(node.parentId);
        parent.children.push(map.get(node.id));
      }
    });

    return data.filter((node) => !node.parentId).map((node) => map.get(node.id));
  };

  const cleanEmptyChildren = (nodes) =>
    nodes.map((node) => ({
      ...node,
      children: node.children.length > 0 ? cleanEmptyChildren(node.children) : undefined,
    }));

  const treeData = useMemo(() => cleanEmptyChildren(buildHierarchy(data)), [data]);

  return (
    <>
      <CheckboxTree
        showCheckbox={false}
        nodes={treeData}
        checked={checked}
        expanded={expanded}
        onCheck={handleCheck}
        onExpand={handleExpand}
      />
      <button className="btn btn-primary mt-3" type="button" onClick={submit}>
        Submit
      </button>
    </>
  );
};

export default TreeCheckbox;
