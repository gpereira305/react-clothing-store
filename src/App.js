import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreGoTop from "./components/common/StoreGoTop";
import { StoreContext } from "./storeContext";
import "./styles/index.css";
import StoreHomePage from "./views/StoreHomePage";
import StoreCartPage from "./views/StoreCartPage";
import StoreCheckoutPage from "./views/StoreCheckoutPage"; 
import StoreHeader from "./components/StoreHeader";
import StoreFooter from "./components/StoreFooter";
import StoreSignup from "./views/StoreSignup";

function App() {
    let [toggleModal, setToggleModal] = useState(false);
    let [item, setItem] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (cartItems) {
            setCartItems(cartItems);
        }
    }, []);

    const handleToggleModal = (item) => {
        setItem(item);
        setToggleModal(!toggleModal);
    };

    const handleAddCartItem = (prev) => {
        const checkKey = cartItems.some((el) => el._id === prev._id);
        if (checkKey) {
            window.alert("Esse item já foi adicionado ao carrinho!");
            return;
        }
        localStorage.setItem("cartItems", JSON.stringify([prev, ...cartItems]));
        setCartItems([prev, ...cartItems]);
        setToggleModal(false);
    };

    const handleRemoveItem = (_id) => {
        const deleteTask = cartItems.filter((item) => item._id !== _id);
        if (window.confirm("Tem certeza que quer remover esse item?")) {
            setCartItems(deleteTask);
            localStorage.setItem("cartItems", JSON.stringify(deleteTask));
        }
    };

    const handleGoTopPage  = () => {
        window.scrollTo({
            top: 0,
        }); 
    }


    return (
        <BrowserRouter>
            <StoreContext.Provider
                value={{
                    handleToggleModal,
                    toggleModal,
                    setToggleModal,
                    item,
                    handleAddCartItem,
                    cartItems,
                    handleRemoveItem,
                    handleGoTopPage
                }}
            >
              <StoreHeader /> 
                <Routes>
                    <Route exact path={"/"} element={<StoreHomePage />} />
                    <Route exact path={"/product/:id"} element={<StoreCartPage />}/> 
                    <Route exact path={"/cart"} element={<StoreCartPage />} />
                    <Route exact path={"/signup"} element={<StoreSignup />} />
                    <Route exact path={"/checkout"} element={<StoreCheckoutPage />} />
                </Routes>
                <StoreGoTop />
                <StoreFooter />
            </StoreContext.Provider>
        </BrowserRouter>
    );
}

export default App;
