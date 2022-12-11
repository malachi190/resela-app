import React from "react";
import { Header } from "../marketplace/Header";
import { ProductPage } from "./ProductPage";
import { Footer } from "../marketplace/Footer";

export const SingleProduct = () => {
    return(
        <>
          <Header/>
          <ProductPage/>
          <Footer />
        </>
    )
}