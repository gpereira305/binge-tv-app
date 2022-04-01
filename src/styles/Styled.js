import styled, { createGlobalStyle } from "styled-components";

/**
 * ----------------------------------------
 *      GLOBAL STYLE
 * ----------------------------------------
 */
export const GlobalStyle = createGlobalStyle`
 * {
   letter-spacing: 1.5px;
 }
 
 :root {
   --light: #cdcdcd;
   --red: #e30000;
   --gray: #ccc;
   --dark: #000;
   --light_dark: rgb(102 102 102);
   --golden: #ffb600;  
   --transition: all ease .3s;
   --radius: 3px;
 }
 
 body {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   height: 100%;
   width: 100%;
   font-weight: 600; 
   scroll-behavior: smooth;    
   background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,11,1) 49%, rgba(13,0,27,1) 100%);
 }
 
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

/**
 * ----------------------------------------
 *            ANIMATIONS
 * ----------------------------------------
 */
  .fade-in-bottom {
    -webkit-animation: fade-in 1.2s ease-in 0.5s both;
            animation: fade-in 1.2s ease-in 0.5s both;
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .slide-in-bottom {
	-webkit-animation: slide-in-bottom 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
	        animation: slide-in-bottom 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
   }

   @-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
`;

export const Container = styled.div`
  padding: 0 5%;
  position: relative;
`;

/**
 * ----------------------------------------
 *           SPINNER ANIMATION
 * ----------------------------------------
 */
export const SpinnerStyled = styled.div`
  border: 5px solid var(--gray);
  border-top: 5px solid var(--red);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 0.6s linear infinite;
  margin: 2% auto;

  @media (max-width: 620px) {
    width: 80px;
    height: 80px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

/**
 * ----------------------------------------
 *       NAVBAR SECTION
 * ----------------------------------------
 */
export const ShowNavbar = styled.div`
  background: var(--dark);
  padding: 15px 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  }

  a {
    text-decoration: none;
    font-size: 28px;
    display: flex;
    color: var(--red);
  }

  svg {
    margin-right: 10px;
  }

  ul {
    display: flex;
    margin: 0;
    min-width: 280px;
    justify-content: space-between;

    @media (max-width: 524px) {
      display: none;
    }

    li {
      list-style-type: none;

      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 524px) {
    display: flex;
  }
`;
/**
 * ----------------------------------------
 *        SEARCH SECTION
 * ----------------------------------------
 */
export const FormShow = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  margin: auto;

  div {
    position: relative;
    display: flex;
    width: 40%;
    min-width: 330px;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 2px solid var(--light);
    padding: 3px 5px;
    font-size: 1rem;
    width: 100%;
    background: #030204;
    color: var(--light);

    &:focus {
      border-bottom: 2px solid var(--red);
    }

    &::placeholder {
      color: var(--light);
    }
  }
  .material-icons {
    position: absolute;
    color: var(--gray);
    right: 0;
  }
`;

/**
 * ----------------------------------------
 *       HOMEPAGE SECTION
 * ----------------------------------------
 */
export const BannerImg = styled.div`
  position: relative;
  > span {
    position: absolute;
    background: rgb(0 0 0 / 85%);
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: -webkit-fill-available;
  }
`;

export const ShowMain = styled.main`
  min-height: 81.1vh;
  margin-bottom: 20px;
`;

export const ShowsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;

  @media (max-width: 1270px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1070px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 870px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ShowCard = styled.li`
  position: relative;
  transition: var(--transition);
  border-radius: var(--radius);

  &:hover {
    transform: translateY(-3px);

    div {
      opacity: initial;
    }
  }

  img {
    width: 100%;
    border-radius: var(--radius);
  }

  > div {
    position: absolute;
    background-color: rgb(0 0 0 / 65%);
    width: 100%;
    top: 0;
    bottom: 4px;
    transition: var(--transition);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    border-radius: var(--radius);

    p {
      font-size: 14px;
      text-transform: uppercase;
      text-align: center;
      color: var(--light);
      line-height: 1.5;
      padding: 0 5px;
      z-index: 1;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 0.8rem;
    height: 1rem;
    padding: 0.65rem;
    background-color: var(--golden);
    color: var(--light);
    border-top-right-radius: var(--radius);
    font-size: 12px;
    font-weight: 800;
    clip-path: polygon(0% 0%, 100% 0, 100% 70%, 51% 100%, 0 70%);
    -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 70%, 51% 100%, 0 70%);
  }
`;

export const ShowErrorMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-top: 10%; */

  h2 {
    margin-top: 20px;
    color: var(--light);
    text-align: center;

    @media (max-width: 620px) {
      font-size: 1.2rem;
    }

    @media (max-width: 420px) {
      font-size: 1rem;
    }
  }
`;

export const ShowMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto 25px;

  button {
    outline: none;
    border: 1px solid var(--red);
    background: var(--red);
    padding: 8px 20px;
    cursor: pointer;
    color: var(--light);
  }
`;

/**
 ************************************************
 *
 *              SHOW DETAIL PAGE
 *
 ************************************************
 */
export const ShowDetailedWrapper = styled.div`
  display: flex;
  margin: 2% 0 10%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ShowImagePoster = styled.div`
  flex: 1;
  margin-right: 50px;

  > img {
    max-width: 550px;
    min-width: 100%;

    @media (max-width: 1200px) {
      width: 85%;
      min-width: auto;
    }

    @media (max-width: 890px) {
      max-width: 100%;
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

export const ShowDetailedInfo = styled.div`
  flex: 2;
`;

export const ShowDetailedName = styled.h1`
  margin: 0 0 30px;
  font-weight: bolder;
  text-transform: uppercase;
  color: var(--red);
`;

export const ShowDetailedData = styled.h3`
  margin: 0 auto 8px;
  color: var(--light);

  span {
    font-weight: bold;
    font-size: 1rem;
    color: var(--light_dark);
  }
`;

export const ShowDetailedSummary = styled.div`
  margin-top: 10%;

  h2 {
    margin: 0 0 10px;
    color: var(--light);
  }

  p {
    color: var(--light_dark);
    font-size: 0.95rem;
    font-style: italic;
    font-weight: bold;
  }
`;

export const ShowDetailedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px;

  img {
    width: 100%;
  }

  @media (max-width: 1670px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1340px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1130px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 790px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ShowDetailedCastInfo = styled.div`
  margin: 0 0 5px;
  color: var(--light);

  h3 {
    margin: 0;
  }

  h4 {
    margin-top: 5px;
  }

  span {
    color: var(--light_dark);
    font-weight: bold;
    font-size: 0.8rem;
    font-style: italic;
  }
`;

export const ShowMargin = styled.div`
  margin-top: 10%;
  position: relative;
`;

/**
 * ----------------------------------------
 *       FOOTER SECTION
 * ----------------------------------------
 */
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  background-color: var(--dark);
  color: var(--light);
  margin-top: 20px;
`;
