import React, { useState, useEffect } from "react";
import { socials } from "../helpers";
import "../styles/index.css";
import {
    StoreHeaderStyled,
    StoreLogoStyled,
    StoreMenuBurgerStyled,
    StoreMenuIconStyled,
    StoreMenuMobileStyled,
    StoreNavIconsStyled,
    StoreNavMenuStyled,
    StoreNavStyled,
    StoreSlideItemStyled,
    StoreSlideTrackStyled,
    StoreSlideWrapperStyled,
    StoreOverlayStyled,
    StoreNavDialogStyled,
    StoreNavDialogWrapperStyled,
} from "../styles/StoreHeaderStyled";

const StoreHeader = () => {
    const [isShrunk, setShrunk] = useState(false);
    const [user, setUser] = useState(true);
    let [toggleNav, setToggleNav] = useState(false);

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

    const handleToggleMenu = () => {
        setToggleNav(!toggleNav);
        // goToTopImg()
    };

    const username = "Carlos Santos";

    return (
        <>
            <StoreSlideWrapperStyled>
                <StoreSlideTrackStyled>
                    <StoreSlideItemStyled>
                        <span>+55 (99)8568908</span>
                    </StoreSlideItemStyled>
                    <StoreSlideItemStyled>
                        <span>info@venezza.com</span>
                    </StoreSlideItemStyled>
                    <StoreSlideItemStyled>
                        <div className="social">
                            {socials.map((social) => (
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={social.id}
                                >
                                    <i
                                        className={social.name}
                                        title={social.title}
                                    ></i>
                                </a>
                            ))}
                        </div>
                    </StoreSlideItemStyled>
                </StoreSlideTrackStyled>
            </StoreSlideWrapperStyled>

            <StoreHeaderStyled className={isShrunk ? "shrunk" : ""}>
                <StoreNavStyled>
                    <StoreLogoStyled title="Home | Levezza">
                        <a className={isShrunk ? "shrunk-h3" : ""} href="/">
                            Venezza
                        </a>
                    </StoreLogoStyled>

                    <StoreNavMenuStyled>
                        <a href="#collection">Novidades</a>
                        <a href="#sale">Descontos</a>
                        <a href="#blog">Blog</a>
                    </StoreNavMenuStyled>

                    <StoreNavIconsStyled>
                        <li>
                            {user ? (
                                <>
                                    <span
                                        style={{ fontSize: ".75rem" }}
                                        title={username}
                                    >
                                        Bem vindo,{" "}
                                        {username.slice(
                                            0,
                                            username.indexOf(" ")
                                        )}
                                    </span>

                                    <StoreNavDialogWrapperStyled>
                                        <span className="material-icons">
                                            arrow_drop_down
                                        </span>
                                        <StoreNavDialogStyled className="fade-in">
                                            <p title="Perfil">Perfil</p>
                                            <p title="Dashboard">Dashboard</p>
                                        </StoreNavDialogStyled>
                                    </StoreNavDialogWrapperStyled>
                                </>
                            ) : (
                                <span
                                    className={`material-icons ${
                                        isShrunk ? "shrunk-icons" : ""
                                    }`}
                                    title="Usuário"
                                >
                                    person
                                </span>
                            )}
                        </li>

                        <li title="Ver carrinho">
                            <span
                                className={`material-icons ${
                                    isShrunk ? "shrunk-icons" : ""
                                }`}
                                title="Carrinho"
                            >
                                shopping_bag
                            </span>
                        </li>
                    </StoreNavIconsStyled>
                </StoreNavStyled>

                <StoreMenuIconStyled
                    onClick={handleToggleMenu}
                    title="Abrir menu"
                >
                    <StoreMenuBurgerStyled open={toggleNav} />
                    <StoreMenuBurgerStyled open={toggleNav} />
                    <StoreMenuBurgerStyled open={toggleNav} />
                </StoreMenuIconStyled>

                <StoreMenuMobileStyled open={toggleNav}>
                    <ul>
                        {user ? (
                            <li>
                                <span
                                    style={{
                                        fontSize: ".9rem",
                                    }}
                                    title={username}
                                >
                                    Bem vindo, <br />
                                    {username.slice(0, username.indexOf(" "))}
                                </span>

                                <div>
                                    <span
                                        className="material-icons"
                                        style={{ marginBottom: "20px" }}
                                    >
                                        settings
                                    </span>
                                    <span className="material-icons">
                                        storefront
                                    </span>
                                </div>
                            </li>
                        ) : (
                            <li onClick={handleToggleMenu}>
                                <span
                                    className="material-icons"
                                    title="Usuário"
                                >
                                    person
                                </span>
                            </li>
                        )}
                        <li title="Ver carrinho" onClick={handleToggleMenu}>
                            <span className="material-icons" title="Carrinho">
                                shopping_bag
                            </span>
                        </li>
                        <li onClick={handleToggleMenu}>
                            <a href="#collection">Novidades</a>
                        </li>
                        <li onClick={handleToggleMenu}>
                            <a href="#sale">Descontos</a>
                        </li>
                        <li onClick={handleToggleMenu}>
                            <a href="#blog">Blog</a>
                        </li>
                    </ul>
                </StoreMenuMobileStyled>
                <StoreOverlayStyled
                    open={toggleNav}
                    onClick={handleToggleMenu}
                />
            </StoreHeaderStyled>
        </>
    );
};

export default StoreHeader;
