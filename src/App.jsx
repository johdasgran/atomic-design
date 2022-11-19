// import logo from './logo.svg';
import './App.css';
import Card from './components/organism/Card';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {


  const [characters, setCharacters] = useState([])


  useEffect(()=> {

    fetch("https://finalspaceapi.com/api/v0/character")
    .then(response => response.json())
    .then(data => setCharacters(data))
   
  },[])






  console.log(characters)

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/cards" element={
            <main>

              <Card type="coffee" name="coffee"></Card>
              <Card type="espresso" name="espresso"></Card>
              <Card type="hanzelnut_latte" name="hanzelnut_latte"></Card>
              <Card type="coffee" name="coffee" ></Card>

              <Card type="espresso" name="espresso"></Card>
              <Card type="hanzelnut_latte" name="hanzelnut_latte"></Card>
              <Card type="coffee" name="coffee"></Card>
              <Card type="espresso" name="espresso"></Card>

            </main>

        } />
      </Routes>
    </BrowserRouter>





    </>  
   
  );
}

export default App;
