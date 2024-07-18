// import React from "react"

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="border-2 p-4 shadow-xl rounded-lg hover:border-black">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-auto object-cover"
      />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-gray-600">{item.shortDescription}</p>
      <p className="text-lg font-semibold">${item.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setStateModal(item)}
      >
        Add to cart
      </button>
    </div>
  )
}

export default ProductItem
