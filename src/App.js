import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StoreGoTop from "./components/common/StoreGoTop";
import { StoreContext } from "./storeContext";
import "./styles/index.css";
import StoreHomePage from "./views/StoreHomePage";
import StoreProductPage from "./views/StoreProductPage";

function App() {
    let [toggleModal, setToggleModal] = useState(false);
    let [item, setItem] = useState(null);

    const handleToggleModal = (item) => {
        setItem(item);
        setToggleModal(!toggleModal);
    };

    return (
        <Router>
            <StoreContext.Provider
                value={{
                    handleToggleModal,
                    toggleModal,
                    setToggleModal,
                    item,
                }}
            >
                <StoreHomePage />
                <Route path={"/product/:id"} component={StoreProductPage} />
                <StoreGoTop />
            </StoreContext.Provider>
        </Router>
    );
}

export default App;
