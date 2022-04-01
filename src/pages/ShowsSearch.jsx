import React from "react";
import { Link } from "react-router-dom";
import UserInput from "../components/UserInput";
import { ShowCard, ShowErrorMsg, ShowMain, ShowsGrid } from "../styles/Styled";
import noImage from "../assets/images/no_image.jpg";
import SpinnerShows from "../components/SpinnerShows";

const ShowsSearch = ({
  handleSubmit,
  handleChange,
  search,
  visibleShows,
  data,
}) => {
  console.log(data);
  return (
    <>
      <UserInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={search}
      />

      {data === null ? (
        <ShowErrorMsg style={{ minHeight: "61vh" }}>
          <h2>Digite um termo para pequisa</h2>
        </ShowErrorMsg>
      ) : (
        <>
          {data.length !== 0 ? (
            <div style={{ minHeight: "61vh" }}>
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
                          {item.show.name} ({item.show.premiered?.split("-")[0]}
                          )
                        </p>
                      </div>
                      <span>{item.show.rating?.average || "???"}</span>
                    </ShowCard>
                  </Link>
                ))}
              </ShowsGrid>
            </div>
          ) : (
            <ShowErrorMsg style={{ minHeight: "61vh" }}>
              <SpinnerShows />
              <h2>Nenhum resultado encontrado, tente novamente</h2>
            </ShowErrorMsg>
          )}
        </>
      )}

      {/* {data.length !== 0 ? (
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
      )} */}
    </>
  );
};

export default ShowsSearch;
