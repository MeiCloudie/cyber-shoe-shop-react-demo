import React from "react"
import ProductItem from "./ProductItem"

const ProductList = ({ productsData, setStateModal }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {productsData.map((product, index) => (
        <ProductItem key={index} item={product} setStateModal={setStateModal} />
      ))}
    </div>
  )
}

export default ProductList
