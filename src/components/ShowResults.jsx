import React from "react";
import { Container, ShowsGrid } from "../styles/Styled";
import Shows from "../pages/Shows";

const ShowResults = ({ shows, error, data }) => {
  if (data === null) {
    return <Shows shows={shows} />;
  }

  return (
    <Container>
      {data.map((item, index) => (
        <ShowsGrid key={index}>
          <li className="list-item">
            <div className="link-container">
              <a href={item.show.url} className="link">
                {item.show.name}
              </a>
            </div>
            <div>
              {item.show.image ? (
                <img src={item.show.image.medium} alt={item.show.name} />
              ) : (
                <div className="missing-img-div">
                  <img src="" />
                  <h1>no photo available</h1>
                </div>
              )}
            </div>
          </li>
        </ShowsGrid>
      ))}
      ;
    </Container>
  );
};

export default ShowResults;
