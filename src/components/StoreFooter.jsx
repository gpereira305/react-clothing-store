import React from "react";
import styled from "styled-components";

// STYLING
const StoreFooterStyled = styled.footer`
  background-color: var(--dark-color);
`;

const images = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
];

const todayDate = new Date().getFullYear();

const StoreFooter = () => {
  return (
    <StoreFooterStyled>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "45px 10%",
        }}
      >
        <div>
          <h3>Venezza</h3>
          <form>
            <input type="email" />
            <button type="submit">Inscrever</button>
          </form>
          <div>
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
        </div>

        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              maxWidth: "245px",
            }}
          >
            {images.map((image, i) => (
              <div style={{ backgroundColor: "#ccc", padding: "2px" }}>
                {image}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <small>&copy; {todayDate} Venezza Store | All rights reserved</small>
      </div>
    </StoreFooterStyled>
  );
};

export default StoreFooter;
