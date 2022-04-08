import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BASE_URL } from "./config";
import { GlobalStyle } from "./styles/Styled";
import axios from "axios";

import ShowsNavbar from "./components/ShowsNavbar";
import ShowsHomePage from "./pages/ShowsHomePage";
import ShowsDetail from "./pages/ShowsDetail";
import ShowsAboutPage from "./pages/ShowsAboutPage";
import ShowsFooter from "./components/ShowsFooter";
import ShowsTopPage from "./components/ShowsTopPage";

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

  const handleChange = (e) => {
    setIsSubmitted(false);
    setSearch(e.target.value);
  };

  // busca os tv shows correspondentes à busca feita no campo de pesquisa
  useEffect(() => {
    if (isSubmitted && search.length > 0) {
      fetch(`${BASE_URL}/search/shows?q=${search}`)
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

  // ao pesquisar um tv o usuário é redirecionado para o grid de imagens
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    window.scrollTo({
      top: 360,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Router>
        <ShowsTopPage>
          <ShowsNavbar shows={shows} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ShowsHomePage
                  shows={shows}
                  data={data}
                  setData={setData}
                  error={error}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  search={search}
                />
              )}
            />
            <Route
              exact
              path="/shows/:id"
              render={(props) => (
                <ShowsDetail
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
            <Route exact path="/about" render={() => <ShowsAboutPage />} />
          </Switch>
          <ShowsFooter />
        </ShowsTopPage>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
