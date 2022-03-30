import React, { useState } from "react";
import { Link } from "react-router-dom";
// import UserInput from "../components/UserInput";
import noImage from "../assets/images/no_image.jpg";
import UserInput from "../components/UserInput";
import SpinnerShows from "../components/SpinnerShows";
import {
  Container,
  ShowCard,
  ShowErrorMsg,
  ShowMain,
  ShowMoreBtn,
  ShowsGrid,
} from "../styles/Styled";

const Shows = ({ shows, error, data, handleSubmit, handleChange, search }) => {
  const [visibleShows, setVisibleShows] = useState(18);

  const handleClick = () => {
    setVisibleShows((prevShows) => prevShows + 12);
  };

  return data === null ? (
    <Container>
      <ShowMain>
        <UserInput
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          search={search}
        />
        {shows.length !== 0 ? (
          <>
            <ShowsGrid>
              {shows.slice(0, visibleShows).map((show) => (
                <Link to={`shows/${show.id}`} key={show.id}>
                  <ShowCard className="fade-in-bottom">
                    <img src={show.image?.medium || noImage} alt={show.name} />
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
    </Container>
  ) : (
    <Container>
      <ShowMain>
        <UserInput
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          search={search}
        />
        {data.length !== 0 ? (
          <ShowsGrid>
            {data.slice(0, visibleShows).map((item) => (
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
          <ShowErrorMsg>
            <SpinnerShows />
            <h2>Nenhum resultado, tente outra pesquisa</h2>
          </ShowErrorMsg>
        )}
      </ShowMain>
    </Container>
  );
};

export default Shows;
