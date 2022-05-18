import React from "react";
import styled from "styled-components";
import { blogposts } from "../data";

// STYLING
const StoreGridContainerStyled = styled.section`
  margin: 0 10%;
`;

const StoreGridTitleStyled = styled.div`
  text-align: center;
  margin: 15% 0 5%;

  h4 {
    text-transform: uppercase;
    color: var(--salmon-color);
    font-size: 0.7rem;
  }

  h3 {
    font-weight: 300;
  }
`;

const StoreGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  position: relative;

  @media (max-width: 1220px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StorePostStyled = styled.div`
  cursor: pointer;

  > div {
    img {
      width: 100%;
    }
  }

  > h4 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.3;
    margin-top: 15px;
  }

  > p {
    line-height: 1.3;
    font-size: 0.75rem;
    color: var(--gray-color);
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
    margin: 15px 0;
  }

  > small {
    font-size: 0.55rem;
    font-style: italic;
  }
`;

const StoreStyleBlog = () => {
  return (
    <StoreGridContainerStyled>
      <StoreGridTitleStyled>
        <h4>Histórias de amor à moda</h4>
        <h3>Nosso blog de estilo de vida</h3>
      </StoreGridTitleStyled>
      <StoreGridStyled>
        {blogposts.map((post) => (
          <StorePostStyled>
            <div>
              <img src={post.img} alt="Autor do post" />
            </div>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <hr />
            <small>{post.authorAndDate}</small>
          </StorePostStyled>
        ))}
      </StoreGridStyled>
    </StoreGridContainerStyled>
  );
};

export default StoreStyleBlog;
