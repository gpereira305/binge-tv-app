import React from "react";
import { Container, ShowsAbout } from "../styles/Styled";

const AboutPage = () => {
  return (
    <Container style={{ minHeight: "81vh", marginTop: "3%" }}>
      <ShowsAbout>
         O propósito desse app é dar a possibilidade para que o usuário possa pesquisar seus TV Shows favoritos, ver informações 
         detalhadas de sua estreia, se ainda está sendo exibido ou se já foi ecerrado, seu país de origem, enredo, elenco, produção e galeria de fotos.
         Para que a existência desse app fosse possível, utilizei a API do TVMaze com toda base de informações sobre milhares de Tv shows. 
      </ShowsAbout>
    </Container>
  );
};

export default AboutPage;
