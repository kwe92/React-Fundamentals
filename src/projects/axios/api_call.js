import axios from "axios";
import React from "react";
import mdbkey from "../keys/movieDatabaseKey.js";

axios
  .get(`https://api.themoviedb.org/3/discover/movie?api_key=`)
  .then((reponse) => console.log(reponse));

// console.log(axios.isCancel("Something"));
