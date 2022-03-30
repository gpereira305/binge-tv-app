import React, { useEffect } from "react";
import noImage from "../assets/images/no_image.jpg";
import {
  Container,
  ShowDetailedWrapper,
  ShowImagePoster,
  ShowDetailedInfo,
  ShowDetailedName,
  ShowDetailedData,
  ShowDetailedSummary,
  ShowDetailedCast,
  ShowDetailedCastInfo,
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
  useEffect(() => {
    getShow(match.params.id);
    getShowCast(match.params.id);
    getShowCrew(match.params.id);
    getShowImages(match.params.id);
    getShowSeasons(match.params.id);
    // eslint-disable-next-line
  }, []);

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
  const regex = /( |<([^>]+)>)/gi;
  const summarized = summary?.replace(regex, " ");

  const weekDays = schedule?.days.map((i) => {
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

  // calcula idade do elenco
  const fnCalculateAge = (dayOfBirth) => {
    const castDateOfBirth = dayOfBirth;
    const birthDate = new Date(castDateOfBirth);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    return calculatedAge;
  };
  fnCalculateAge();

  console.log(showImages);

  return (
    <Container>
      <ShowDetailedWrapper>
        <ShowImagePoster>
          <img src={image?.original || noImage} alt={name} title={name} />
        </ShowImagePoster>

        <ShowDetailedInfo>
          <ShowDetailedName>
            {name?.length > 40 ? `${name?.slice(0, 40)}...` : name || "???"}
          </ShowDetailedName>
          <ShowDetailedData>
            Data de estreia:{" "}
            <span>{premiered?.split("-").reverse().join("/") || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Qde. de temporadas:{" "}
            <span>
              {seasons?.length || "???"}
              {seasons?.length > 1 ? " Temporadas" : " Temporada" || "???"}
            </span>
          </ShowDetailedData>

          <ShowDetailedData>
            {status !== "Running" && (
              <>
                Último episódio:{" "}
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
            Nota IMDb: <span>{`${rating?.average}/10` || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Gênero: <span>{genres?.join(", ") || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Idioma:{" "}
            <span>{language === "English" ? "Inglês" : language || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Duração do episódio: <span>{`${runtime} minutos` || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            Dia de exibição:{" "}
            <span>
              {!schedule?.time ? "???" : `${weekDays} - às ${schedule?.time}hs`}
            </span>
          </ShowDetailedData>

          <ShowDetailedData>
            Canal original: <span>{network?.name || "???"}</span>
          </ShowDetailedData>

          <ShowDetailedData>
            País de origem: <span>{network?.country?.name || "???"}</span>
          </ShowDetailedData>
          <ShowDetailedSummary>
            <h2>Resumo do enredo:</h2>
            <p>{summarized || "???"}</p>
          </ShowDetailedSummary>
        </ShowDetailedInfo>
      </ShowDetailedWrapper>

      {/*=======    ELENCO ======== */}
      {cast ? (
        <>
          <ShowDetailedName>Elenco</ShowDetailedName>
          <ShowDetailedCast>
            {cast.map((item) => (
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
          </ShowDetailedCast>
        </>
      ) : (
        <ShowDetailedCastInfo>
          <h1>Sem informações do elenco</h1>
        </ShowDetailedCastInfo>
      )}

      {/*=======  PRODUÇÃO ======== */}
      {crew && (
        <>
          <div style={{ margin: "50px auto 0" }}>
            <h2>Produção</h2>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {crew.map((item) => (
              <div key={item.id}>
                <img
                  src={item.person.image?.medium || noImage}
                  alt={item.person.name}
                  style={{ width: "180px", minHeight: "230px" }}
                  title={item.person.name}
                />

                <h4 style={{ margin: "0 0 5px" }} key={item.i}>
                  {item.person.name}
                </h4>
                <span>{item.type}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/*=======  GALERIA DE IMAGES ======== */}
      {showImages && (
        <>
          <div style={{ margin: "50px auto 0" }}>
            <h2>Galeria:</h2>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
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
                    style={{ width: "400px" }}
                  />
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default ShowDetail;
