const parent = React.createElement("h1", { id: "parent" }, [
  React.createElement("h2", { id: "child1" }, "child1"),
  React.createElement("h2", { id: "child2" }, "child2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
