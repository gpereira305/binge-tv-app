import React, { useEffect } from "react";
import { useLocation } from "react-router";
const RouterTopShows = (props) => {
  const location = useLocation();

  // Ao mudar de tela, será redirecionado para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default RouterTopShows;
