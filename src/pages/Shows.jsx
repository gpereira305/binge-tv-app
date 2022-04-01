import React, { useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../assets/images/no_image.jpg";
import SpinnerShows from "../components/SpinnerShows";
import {
  Container,
  ShowCard,
  ShowErrorMsg,
  ShowMain,
  ShowMoreBtn,
  ShowsGrid,
} from "../styles/Styled";
import GoToTopShows from "../components/GoToTopShows";
import CarouselShows from "../components/CarouselShows";

const Shows = ({ shows }) => {
  const [visibleShows, setVisibleShows] = useState(24);

  // limita em 18 shows
  const handleClick = () => {
    setVisibleShows((prevShows) => prevShows + 18);
  };

  return (
    <>
      <CarouselShows />
      <Container style={{ marginTop: "3%" }}>
        <ShowMain>
          {shows.length !== 0 ? (
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
              <SpinnerShows />
            </ShowErrorMsg>
          )}
        </ShowMain>
        <GoToTopShows />
      </Container>
    </>
  );
};

export default Shows;
