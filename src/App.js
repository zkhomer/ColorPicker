import './App.css';
import React from "react";
import {ColorPicker} from "./component/ColorPicker"

function App() {

  const colors =  [{name: 'red', value: '#ff0000'},{name: 'yellow', value: '#ffcc33'},{name: 'green', value: '#11a806'}, {name: 'blue', value: '#0066ff'} ];
  const value  =  '#000000';
  const onChange = (color) =>  console.log('color: ', color, ' has been selected') ;


  return (
    <>
  <ColorPicker value={value} onChange={onChange} colors={colors}/>
    </>
  );
}

export default App;
