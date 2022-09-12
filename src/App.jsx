// import logo from './logo.svg';
import './App.css';
import Card from './components/organism/Card';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
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




    {/* <main>

     <Card type="coffee" name="coffee"></Card>
     <Card type="espresso" name="espresso"></Card>
     <Card type="hanzelnut_latte" name="hanzelnut_latte"></Card>
     <Card type="coffee" name="coffee" ></Card>

     
     <Card type="espresso" name="espresso"></Card>
     <Card type="hanzelnut_latte" name="hanzelnut_latte"></Card>
     <Card type="coffee" name="coffee"></Card>
     <Card type="espresso" name="espresso"></Card>






     </main> */}


    </>  
   
  );
}

export default App;
