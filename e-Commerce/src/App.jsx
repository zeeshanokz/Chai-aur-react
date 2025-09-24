import ProductCard from "./ProductCard";
import React from "react";

// Fake Data (like API response)
const products = [
  {
    id: 1,
    title: "Laptop",
    description: "High-performance laptop for developers.",
    price: 1200,
    image: "https://picsum.photos/id/1/200/300"
  },
  {
    id: 2,
    title: "Smartphone",
    description: "Latest smartphone with amazing camera.",
    price: 800,
    image: "https://picsum.photos/id/28/200/300"
  },
  {
    id: 3,
    title: "Headphones",
    description: "Noise-cancelling wireless headphones.",
    price: 200,
    image: "https://picsum.photos/id//200/300"
  },
  {
    id: 4,
    title: "Keyboard",
    description: "RGB mechanical keyboard.",
    price: 100,
    image: "https://picsum.photos/id/237/200/300"
  }
];

function App() {
  // Function to handle "Add to Cart" (passed as prop)
  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <div>
      <h1>🛍️ Product Store</h1>

      {/* Looping through array and passing props */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            onAddToCart={handleAddToCart} // event handler passed as prop
          />
        ))}
      </div>
    </div>
  );
}

export default App;
