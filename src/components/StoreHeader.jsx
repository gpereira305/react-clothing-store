import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../index.css";

// STYLING
const StoreSlideWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--white-color);
  z-index: 10;
  padding: 5px;
  height: 33px;
`;

const StoreSlideTrack = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 50%;
  margin: auto;
  height: 100%;

  @media (max-width: 820px) {
    border: 1px solid red;
    min-width: 70%;
    justify-content: space-between;
  }

  @media (max-width: 620px) {
    min-width: 90%;
  }
`;

const StoreSlideItem = styled.div`
  span {
    color: var(--black-color);
    font-weight: 600;
  }

  .social {
    display: flex;
    justify-content: space-evenly;
    min-width: 130px;

    a {
      font-size: 1rem;
      color: var(--black-color);
    }

    @media (max-width: 420px) {
      min-width: 100px;

      .fa-brands {
        font-size: 0.7rem;
      }
    }
  }
`;

const StoreHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: var(--black-color);
  position: fixed;
  width: 100%;
  transition: var(--transition);
  z-index: 100;
  top: 34px;
`;

const StoreLogoStyled = styled.div`
  > h3 {
    font-weight: 300;
    transition: var(--transition);
    color: var(--white-color);
  }
`;

const StoreNavStyled = styled.nav`
  > ul {
    display: flex;
  }

  span {
    transition: var(--transition);
    color: var(--white-color);
  }
`;

const StoreHeader = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }
        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }
        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <StoreSlideWrapper>
        <StoreSlideTrack>
          <StoreSlideItem>
            <span>+55 (99)8568908</span>
          </StoreSlideItem>
          <StoreSlideItem>
            <span>info@venezza.com</span>
          </StoreSlideItem>
          <StoreSlideItem>
            <div className="social">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f" title="Facebook"></i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                {" "}
                <i className="fa-brands fa-instagram" title="Instagram"></i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-pinterest-p" title="Pinterest"></i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                {" "}
                <i className="fa-brands fa-youtube" title="Youtube"></i>
              </a>
            </div>
          </StoreSlideItem>
        </StoreSlideTrack>
      </StoreSlideWrapper>

      <StoreHeaderStyled className={isShrunk ? "shrunk" : ""}>
        <StoreLogoStyled title="Home | Levezza">
          <h3 className={isShrunk ? "shrunk-h3" : ""}>Levezza</h3>
        </StoreLogoStyled>

        <StoreNavStyled>
          <ul>
            <li>
              <span
                className={`material-icons ${isShrunk ? "shrunk-icons" : ""}`}
              >
                person
              </span>
            </li>
            <li title="Ver carrinho">
              <span
                className={`material-icons ${isShrunk ? "shrunk-icons" : ""}`}
              >
                shopping_bag
              </span>
            </li>
          </ul>
        </StoreNavStyled>

        <div style={{ display: "none" }}>
          <span className="material-icons">menu</span>
        </div>
      </StoreHeaderStyled>
    </>
  );
};

export default StoreHeader;
