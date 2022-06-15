import React, { useState, useEffect } from "react";
import "../styles/index.css";
import { Link, useLocation } from "react-router-dom";
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
} from "../styles/StoreHeaderStyled";

const socials = [
    {
        link: "https://www.facebook.com",
        name: "fa-brands fa-facebook-f",
        title: "Facebook",
        id: 1,
    },
    {
        link: "https://www.instagram.com",
        name: "fa-brands fa-instagram",
        title: "Instagram",
        id: 2,
    },
    {
        link: "https://www.pinterest.com",
        name: "fa-brands fa-pinterest-p",
        title: "Pinterest",
        id: 3,
    },
    {
        link: "https://www.youtube.com",
        name: "fa-brands fa-youtube",
        title: "Youtube",
        id: 4,
    },
];

const StoreHeader = () => {
    const [isShrunk, setShrunk] = useState(false);
    const [isOpen, setOpen] = useState(false);
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
                            <span
                                className={`material-icons ${
                                    isShrunk ? "shrunk-icons" : ""
                                }`}
                            >
                                person
                            </span>
                        </li>
                        <li title="Ver carrinho">
                            <span
                                className={`material-icons ${
                                    isShrunk ? "shrunk-icons" : ""
                                }`}
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
                        <li onClick={handleToggleMenu}>
                            <span
                                className={`material-icons ${
                                    isShrunk ? "shrunk-icons" : ""
                                }`}
                            >
                                person
                            </span>
                        </li>
                        <li title="Ver carrinho" onClick={handleToggleMenu}>
                            <span
                                className={`material-icons ${
                                    isShrunk ? "shrunk-icons" : ""
                                }`}
                            >
                                shopping_bag
                            </span>
                        </li>
                        <li onClick={handleToggleMenu}>Novidades</li>
                        <li onClick={handleToggleMenu}>Descontos</li>
                        <li onClick={handleToggleMenu}>Blog</li>
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
