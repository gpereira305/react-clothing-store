import { useEffect, useState } from "react";
import StoreGoTop from "./components/common/StoreGoTop";
import { StoreContext } from "./storeContext";
import "./styles/index.css";
import StoreHomePage from "./views/StoreHomePage";

function App() {
    let [toggleModal, setToggleModal] = useState(false);
    let [newsLetter, setNewsLetter] = useState(false);

    const handleNewsLetterModal = () => {
        setNewsLetter(!newsLetter);
    };
    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };

    useEffect(() => {
        setTimeout(() => {
            if (localStorage.newsLetter) return;
            handleNewsLetterModal();
            // localStorage.newsLetter = JSON.stringify(newsLetter);
        }, 3000);
    }, []);

    return (
        <>
            <StoreContext.Provider
                value={{
                    handleToggleModal,
                    toggleModal,
                    setToggleModal,
                    handleNewsLetterModal,
                    newsLetter,
                }}
            >
                <StoreHomePage />
                <StoreGoTop />
            </StoreContext.Provider>
        </>
    );
}

export default App;
