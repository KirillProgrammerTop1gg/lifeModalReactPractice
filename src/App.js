import './App.css';
import styled from "styled-components";
import React, {Component} from "react";
import Modal from './Components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Modal promotionEnd={Number(prompt('Введіть час до кінця акції (unix time у мс): '))} />
    </div>
  );
}

export default App;