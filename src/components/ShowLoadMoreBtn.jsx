import React from "react";
import { ShowMoreBtn } from "../styles/Styled";

const ShowLoadMoreBtn = ({ handleClick }) => {
  return (
    <ShowMoreBtn className="fade-in-bottom">
      <button type="button" title="Ver mais conteúdo" onClick={handleClick}>
        Mostrar mais
      </button>
    </ShowMoreBtn>
  );
};

export default ShowLoadMoreBtn;
