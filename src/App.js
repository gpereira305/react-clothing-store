import { useEffect, useState } from "react";
import StoreGoTop from "./components/common/StoreGoTop";
import { StoreContext } from "./storeContext";
import "./styles/index.css";
import StoreHomePage from "./views/StoreHomePage";

function App() {
    let [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };

    return (
        <>
            <StoreContext.Provider
                value={{
                    handleToggleModal,
                    toggleModal,
                    setToggleModal,
                }}
            >
                <StoreHomePage />
                <StoreGoTop />
            </StoreContext.Provider>
        </>
    );
}

export default App;
