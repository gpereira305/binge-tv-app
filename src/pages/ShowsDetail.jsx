import React, { useEffect, useState } from "react";
import noImage from "../assets/images/no_image.jpg";
import ShowsGoToTop from "../components/ShowsGoToTop";
import {
  Container,
  ShowDetailedWrapper,
  ShowImagePoster,
  ShowDetailedInfo,
  ShowDetailedName,
  ShowDetailedData,
  ShowDetailedSummary,
  ShowDetailedCastInfo,
  ShowDetailedGrid,
  ShowMargin,
  ShowMoreBtn,
} from "../styles/Styled.js";

const ShowDetail = ({
  show,
  getShow,
  cast,
  getShowCast,
  crew,
  getShowCrew,
  showImages,
  getShowImages,
  seasons,
  getShowSeasons,
  match,
}) => {
  const [visibleCast, setVisibleCast] = useState(12);
  const [visibleCrew, setVisibleCrew] = useState(12);

  useEffect(() => {
    getShow(match.params.id);
    getShowCast(match.params.id);
    getShowCrew(match.params.id);
    getShowImages(match.params.id);
    getShowSeasons(match.params.id);
    // eslint-disable-next-line
  }, []);

  const handleCast = () => {
    setVisibleCast((prevShows) => prevShows + 12);
  };

  const handleCrew = () => {
    setVisibleCrew((prevShows) => prevShows + 12);
  };

  const {
    name,
    summary,
    image,
    rating,
    genres,
    language,
    runtime,
    premiered,
    ended,
    network,
    schedule,
    status,
  } = show;

  // parseia de html tag para string
  const summarized = (text) => {
    const regex = /( |<([^>]+)>)/gi;
    return text?.replace(regex, " ");
  };

  // traduz os dias da semana para o Português
  const weekDays = (dayName) => {
    return dayName.map((i) => {
      if (i === "Monday") {
        i = " Segundas-feiras";
        return i;
      } else if (i === "Tuesday") {
        i = " Terças-feiras";
        return i;
      } else if (i === "Wednesday") {
        i = " Quartas-feiras";
        return i;
      } else if (i === "Thursday") {
        i = " Quintas-feiras";
        return i;
      } else if (i === "Friday") {
        i = " Sextas-feiras";
        return i;
      } else if (i === "Saturday") {
        i = " Sábados";
        return i;
      } else if (i === "Sunday") {
        i = " Domingos";
        return i;
      }
      return i;
    });
  };

  // calcula idade do ator
  const fnCalculateAge = (dayOfBirth) => {
    const castDateOfBirth = dayOfBirth;
    const birthDate = new Date(castDateOfBirth);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    return calculatedAge;
  };

  return (
    <Container className="fade-in-bottom" style={{ minHeight: "81vh" }}>
      <ShowDetailedWrapper>
        <ShowImagePoster>
          <img src={image?.original || noImage} alt={name} title={name} />
        </ShowImagePoster>

        <ShowDetailedInfo>
          <ShowDetailedName>
            {name?.length > 40 ? `${name?.slice(0, 40)}...` : name || "???"}
          </ShowDetailedName>
          <ShowDetailedData>
            Estreia:{" "}
            <span>{premiered?.split("-").reverse().join("/") || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Temporadas:{" "}
            <span>
              {seasons?.length || "???"}
              {seasons?.length > 1 ? " Temporadas" : " Temporada" || "???"}
            </span>
          </ShowDetailedData>

          <ShowDetailedData>
            {status !== "Running" && (
              <>
                Final:{" "}
                <span>{ended?.split("-").reverse().join("/") || "???"}</span>
              </>
            )}
          </ShowDetailedData>

          <ShowDetailedData>
            Status:{" "}
            <span>
              {status === "Ended" ? "Encerrada" : "Em exibição" || "???"}
            </span>
          </ShowDetailedData>

          <ShowDetailedData>
            Nota IMDb:{" "}
            <span>{rating?.average ? `${rating?.average}/10` : "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Gênero: <span>{genres?.join(", ") || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Idioma original:{" "}
            <span>{language === "English" ? "Inglês" : language || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Duração:{" "}
            <span>{runtime ? `${runtime} minutos` : "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Exibição:{" "}
            <span>
              {!schedule?.time
                ? "???"
                : `${weekDays(schedule?.days)} - às ${schedule?.time}hs`}
            </span>
          </ShowDetailedData>

          <ShowDetailedData>
            Canal original: <span>{network?.name || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            País original <span>{network?.country?.name || "???"}</span>
          </ShowDetailedData>
          <ShowDetailedSummary>
            <h2>Enredo:</h2>
            <p>{summarized(summary)}</p>
          </ShowDetailedSummary>
        </ShowDetailedInfo>
      </ShowDetailedWrapper>

      {/*=======    ELENCO ======== */}
      {cast.length > 0 ? (
        <ShowMargin>
          <ShowDetailedName>Elenco</ShowDetailedName>
          <ShowDetailedGrid>
            {cast.slice(0, visibleCast).map((item) => (
              <div key={item.id}>
                <img
                  src={item.person.image?.medium || noImage}
                  alt={item.person.name}
                  title={item.person.name}
                />

                <ShowDetailedCastInfo>
                  <h3>{item.person?.name}</h3>
                  <span>({item.character?.name})</span>

                  <h4> Nascimento: </h4>
                  <span>
                    {item.person?.birthday
                      ? item.person?.birthday?.split("-").reverse().join("/")
                      : "???"}
                    {item.person?.birthday
                      ? ` (${fnCalculateAge(item.person?.birthday)} anos)`
                      : ""}
                  </span>

                  {item.person?.deathday ? (
                    <>
                      <h4>Falecimento: </h4>
                      <span>
                        {item.person?.deathday?.split("-").reverse().join("/")}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                  <h4>
                    País:{" "}
                    <span>
                      {item.person?.country?.name
                        ? item.person.country?.name
                        : "???"}
                    </span>
                  </h4>
                </ShowDetailedCastInfo>
              </div>
            ))}
          </ShowDetailedGrid>
          {cast.slice(0, visibleCast).length !== cast.length ? (
            <ShowMoreBtn className="fade-in-bottom">
              <button type="button" onClick={handleCast}>
                Mostrar mais
              </button>
            </ShowMoreBtn>
          ) : (
            ""
          )}
        </ShowMargin>
      ) : (
        <ShowMargin></ShowMargin>
      )}

      {/*=======  PRODUÇÃO ======== */}
      {crew.length > 0 ? (
        <ShowMargin>
          <ShowDetailedName>Produção:</ShowDetailedName>
          <ShowDetailedGrid>
            {crew.slice(0, visibleCrew).map((item) => (
              <div key={item.id}>
                <img
                  src={item?.person.image?.medium || noImage}
                  alt={item?.person?.name}
                  title={item?.person?.name}
                />

                <h3 style={{ color: "var(--light)" }}>
                  {item?.person?.name || "???"}
                </h3>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                  }}
                >
                  {item?.type || "???"}
                </span>
              </div>
            ))}
          </ShowDetailedGrid>

          {crew.slice(0, visibleCrew).length !== crew.length ? (
            <ShowMoreBtn className="fade-in-bottom">
              <button type="button" onClick={handleCrew}>
                Mostrar mais
              </button>
            </ShowMoreBtn>
          ) : (
            ""
          )}
        </ShowMargin>
      ) : (
        <ShowMargin></ShowMargin>
      )}

      {/*=======  GALERIA DE IMAGES ======== */}
      {showImages.length > 0 ? (
        <ShowMargin>
          <ShowDetailedName>Galeria:</ShowDetailedName>
          <ShowDetailedGrid>
            {showImages.map((item) => (
              <div key={item.id}>
                <a
                  href={item.resolutions?.original?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.resolutions?.original?.url}
                    alt={item?.type}
                    title={item?.type}
                  />
                </a>
              </div>
            ))}
          </ShowDetailedGrid>
        </ShowMargin>
      ) : (
        <ShowMargin></ShowMargin>
      )}
      <ShowsGoToTop />
    </Container>
  );
};

export default ShowDetail;
