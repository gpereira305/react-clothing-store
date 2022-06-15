import React from "react";
import { blogposts } from "../data";
import {
    StoreGridContainerStyled,
    StoreGridTitleStyled,
    StoreGridStyled,
    StorePostStyled,
} from "../styles/StoreBlogStyled";

// STYLING

const StoreBlog = () => {
    return (
        <StoreGridContainerStyled id="blog">
            <StoreGridTitleStyled>
                <h4>Histórias de amor à moda</h4>
                <h3>Nosso blog de estilo de vida</h3>
            </StoreGridTitleStyled>
            <StoreGridStyled>
                {blogposts.map((post) => (
                    <StorePostStyled key={post.id}>
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

export default StoreBlog;
