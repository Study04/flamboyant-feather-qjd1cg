import React from "react";
import ReactDOM from "react-dom/client";

function LogButton(props) {
  return (
    // write code below this line
    props.loggedin ? <button>Logout</button> : <button>Login</button>
    // write code above this line
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LogButton loggedin={true} />);
