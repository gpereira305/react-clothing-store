import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreGoTop from "./components/common/StoreGoTop";
import { StoreContext } from "./storeContext";
import "./styles/index.css";
import StoreHomePage from "./views/StoreHomePage";
import StoreCartPage from "./views/StoreCartPage";

function App() {
    let [toggleModal, setToggleModal] = useState(false);
    let [item, setItem] = useState(null);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItem"));
        if (cartItems) {
            setCartItem(cartItems);
        }
    }, []);

    const handleToggleModal = (item) => {
        setItem(item);
        setToggleModal(!toggleModal);
    };

    const handleAddCartItem = (prev) => {
        const checkKey = cartItem.some((el) => el._id === prev._id);
        if (checkKey) {
            window.alert("Esse item já foi adicionado ao carrinho!");
            return;
        }
        localStorage.setItem("cartItem", JSON.stringify([prev, ...cartItem]));
        setCartItem([prev, ...cartItem]);
    };

    const handleRemoveItem = (_id) => {
        const deleteTask = cartItem.filter((item) => item._id !== _id);
        if (window.confirm("Tem certeza que quer remover esse item?")) {
            setCartItem(deleteTask);
            localStorage.setItem("cartItem", JSON.stringify(deleteTask));
        }
    };

    return (
        <BrowserRouter>
            <StoreContext.Provider
                value={{
                    handleToggleModal,
                    toggleModal,
                    setToggleModal,
                    item,
                    handleAddCartItem,
                    cartItem,
                    handleRemoveItem,
                }}
            >
                <Routes>
                    <Route exact path={"/"} element={<StoreHomePage />} />
                    <Route
                        exact
                        path={"/product/:id"}
                        element={<StoreCartPage />}
                    />
                </Routes>
                <StoreGoTop />
            </StoreContext.Provider>
        </BrowserRouter>
    );
}

export default App;
