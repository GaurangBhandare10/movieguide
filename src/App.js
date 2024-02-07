import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  const [movieData, setMovieData] = useState(null);
  const MY_API_KEY = "9fd7f7c1";

  const fetchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${MY_API_KEY}&t=${searchTerm}`
      );
      setMovieData(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`Error : ${error.message}`);
      }
    }
  };

  useEffect(() => {
    fetchMovie(""); // Now fetchMovie is included in the dependency array
  }, []); // Include fetchMovie in the dependency array

  return (
    <div className="App">
      <Navbar fetchMovie={fetchMovie} />
      <Body movieData={movieData} />
      <Footer />
    </div>
  );
}

export default App;
