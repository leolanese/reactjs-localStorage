import React from "react";
import ReactDOM from "react-dom";

import localStorage from "./local-storage";

function handleShow(key) {
  const item = window.localStorage.getItem('keyId');
  console.log('Value stored:', item);
}

function handleDelete(key) {
  const item = window.localStorage.removeItem('keyId');
  (item === null )? console.log('empty') :  console.log(item);
}

function App() {
  const [name, setName] = localStorage('keyId', '');

  return (
    <div>
      <input
        type='text'
        placeholder=''
        required='"required'
        pattern='.{1,}'
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={(e) => handleShow(e)}>Show local storage {name}</button>

      <button onClick={e => handleDelete(e)}>Clear local storage {name}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
