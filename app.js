const parent = React.createElement("div",{id:"head1"}, [React.createElement("div",{id:"head1"},"hello"), React.createElement("div",{id:"head1"},"buddy")]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

