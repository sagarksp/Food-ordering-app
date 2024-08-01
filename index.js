const heading = React.createElement("h1", {
    id:"heading"
}, "heading made by using react");
console.log(heading)//object print karega
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)