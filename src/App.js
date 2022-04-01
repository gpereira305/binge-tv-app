import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shows from "./pages/Shows";
import ShowDetail from "./pages/ShowDetail";
import AboutPage from "./pages/AboutPage";
import ShowsSearch from "./pages/ShowsSearch.jsx";
import axios from "axios";
import { BASE_URL } from "./config";
import FooterShows from "./components/FooterShows";
import { GlobalStyle } from "./styles/Styled";
import RouterTopShows from "./components/RouterTopShows";

function App() {
  const [shows, setShows] = useState([]);
  const [show, setShow] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [showImages, setShowImages] = useState([]);
  const [seasons, setSeasons] = useState([]);

  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // mostra todos os tv shows na home
  useEffect(() => {
    const fetchData = async () => {
      const url = await axios.get(`${BASE_URL}/shows`);
      setShows(url.data);
    };
    fetchData();
  }, []);

  // pega o tv show pelo id
  const getShow = async (id) => {
    const url = await axios.get(`${BASE_URL}/shows/${id}`);
    setShow(url.data);
  };

  // busca pelo elenco do tv show
  const getShowCast = async (id) => {
    const url = await axios.get(`${BASE_URL}/shows/${id}/cast`);
    setCast(url.data);
  };

  // busca pela produção do tv show
  const getShowCrew = async (id) => {
    const url = await axios.get(`${BASE_URL}/shows/${id}/crew`);
    setCrew(url.data);
  };

  // busca pelas imagens do tv show
  const getShowImages = async (id) => {
    const url = await axios.get(`${BASE_URL}/shows/${id}/images`);
    setShowImages(url.data);
  };

  // busca pelas seasons  do tv show
  const getShowSeasons = async (id) => {
    const url = await axios.get(`${BASE_URL}/shows/${id}/seasons`);
    setSeasons(url.data);
  };

  const handleChange = (event) => {
    setIsSubmitted(false);
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && search.length > 0) {
      fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
        })
        .then((json) => {
          setError(null);
          setData(json);
        })
        .catch((error) => {
          setError(error);
        });
      setSearch("");
    }
  }, [isSubmitted, search]);

  return (
    <>
      <Router>
        <RouterTopShows>
          <Navbar shows={shows} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Shows shows={shows} data={data} error={error} />
              )}
            />
            <Route
              exact
              path="/search"
              render={(props) => (
                <ShowsSearch
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  search={search}
                  data={data}
                  error={error}
                />
              )}
            />
            <Route
              exact
              path="/shows/:id"
              render={(props) => (
                <ShowDetail
                  {...props}
                  getShow={getShow}
                  getShowCast={getShowCast}
                  getShowCrew={getShowCrew}
                  getShowImages={getShowImages}
                  getShowSeasons={getShowSeasons}
                  show={show}
                  cast={cast}
                  crew={crew}
                  showImages={showImages}
                  seasons={seasons}
                />
              )}
            />
            <Route exact path="/about" render={(props) => <AboutPage />} />
          </Switch>
          <FooterShows />
        </RouterTopShows>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
