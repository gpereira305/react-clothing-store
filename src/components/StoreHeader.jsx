import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../index.css";

// STYLING
const StoreHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background-color: var(--white-color);
  position: fixed;
  width: 100%;
  transition: var(--transition);
  z-index: 100;
`;

const StoreLogoStyled = styled.div`
  > h3 {
    font-weight: 300;
    transition: var(--transition);
  }
`;

const StoreNavStyled = styled.nav`
  > ul {
    display: flex;
  }

  span {
    transition: var(--transition);
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

  console.log(isShrunk);

  return (
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
  );
};

export default StoreHeader;
