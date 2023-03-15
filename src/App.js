import React, { useState } from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Route, Routes } from "react-router-dom"; // import BrowserRouter, Switch and Route from react-router-dom
import Contact from "./components/Contact"; // import the Contact component
import Detail from "./components/Detail";
import News from "./components/News";
import About from "./components/About";
import AddFilm from "./components/AddFilm"
import "react-toastify/dist/ReactToastify.css";;

function App() {
  const [filmId, setFilmId] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navigation loading={loading} setLoading={setLoading} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              setFilmId={setFilmId}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route
          path="/addFilm"
          element={<AddFilm filmId={filmId} setFilmId={setFilmId} />}
        ></Route>
        {/* <Route path="/news" element={<News/>}/>
          <Route path="/about" element={<About/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
