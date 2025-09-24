// Child Component
import React from "react";
function ProductCard({ title, description, price, image, onAddToCart }) {
  return (
    <div style={{ border: "1px solid gray", margin: "15px", padding: "15px", width: "250px" }}>
      {/* Product Image */}
      <img src={image} alt={title} width="200" height="150" />

      {/* Product Details */}
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>${price}</h3>

      {/* Button - event passed as a prop */}
      <button onClick={() => onAddToCart(title)}>Add to Cart</button>
    </div>

  );
}

export default ProductCard;
