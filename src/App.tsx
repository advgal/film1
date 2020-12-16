import React from 'react';
import './App.css';
import {Film} from "./film";
import {Card} from "./card";

function App () {
    return (
        <div className="App">
            <header ><h1>Film</h1></header>
            <Film></Film>
            <Card title="bla" paragraph="blo"/>
            <h2>Ende</h2>
        </div>
    );
}

export default App;
