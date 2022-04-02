import React, { useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../assets/images/no_image.jpg";
import ShowsSpinner from "../components/ShowsSpinner";
import {
  Container,
  ShowCard,
  ShowErrorMsg,
  ShowMain,
  ShowMoreBtn,
  ShowsGrid,
} from "../styles/Styled";
import ShowsGoToTop from "../components/ShowsGoToTop";
import ShowsCarousel from "../components/ShowsCarousel";
import ShowsSearch from "../components/ShowsSearch";

const ShowsHomePage = ({ shows, handleSubmit, handleChange, search, data }) => {
  const [visibleShows, setVisibleShows] = useState(24);

  // limita em 18 shows a serem mostrados
  const handleClick = () => {
    setVisibleShows((prevShows) => prevShows + 18);
  };

  return (
    <>
      <ShowsCarousel />
      <Container style={{ marginTop: "3%" }}>
        <ShowsSearch
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          search={search}
        />
        <ShowMain>
          {data ? (
            <ShowsGrid>
              {data.map((item) => (
                <Link to={`shows/${item.show.id}`} key={item.show.id}>
                  <ShowCard className="fade-in-bottom">
                    <img
                      src={item.show.image?.medium || noImage}
                      alt={item.show.name}
                    />
                    <div>
                      <p>
                        {item.show.name} ({item.show.premiered?.split("-")[0]})
                      </p>
                    </div>
                    <span>{item.show.rating?.average || "???"}</span>
                  </ShowCard>
                </Link>
              ))}
            </ShowsGrid>
          ) : (
            <>
              {shows?.length !== 0 ? (
                <>
                  <ShowsGrid>
                    {shows.slice(0, visibleShows).map((show) => (
                      <Link to={`shows/${show.id}`} key={show.id}>
                        <ShowCard className="fade-in-bottom">
                          <img
                            src={show.image?.medium || noImage}
                            alt={show.name}
                          />
                          <div>
                            <p>
                              {show.name} ({show.premiered.split("-")[0]})
                            </p>
                          </div>
                          <span>{show.rating.average}</span>
                        </ShowCard>
                      </Link>
                    ))}
                  </ShowsGrid>

                  {/*===== botão 'mostrar mais' ======*/}
                  {shows.slice(0, visibleShows).length !== 240 ? (
                    <ShowMoreBtn className="fade-in-bottom">
                      <button type="button" onClick={handleClick}>
                        Mostrar mais
                      </button>
                    </ShowMoreBtn>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <ShowErrorMsg>
                  <ShowsSpinner />
                </ShowErrorMsg>
              )}
            </>
          )}
          {data?.length === 0 && (
            <div style={{ textAlign: "center", marginTop: "10%" }}>
              <h1 style={{ color: "var(--light)" }}>
                <ShowsSpinner />
                <br />
                Nenhum resultado encontrado
              </h1>
            </div>
          )}
        </ShowMain>
        <ShowsGoToTop />
      </Container>
    </>
  );
};

export default ShowsHomePage;
