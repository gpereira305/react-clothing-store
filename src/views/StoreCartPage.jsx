import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../storeContext";

const StoreCartPage = () => {
    const { cartItem } = useContext(StoreContext);
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h1>StoreCartPage</h1>
        </div>
    );
};

export default StoreCartPage;
