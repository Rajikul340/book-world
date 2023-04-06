import Layout from "@/components/Layout/Layout";
import { addToDb, getStoredCart } from "@/components/Product/FakeDb/Fakedb";
import FictionBookDetails from "@/components/Product/FictionBookDetails";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Product = () => {
  const [cart, setCart] = useState([]);
  const {
    data: { items } = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [
      "books",
      "v1",
      "volumes",
      "subject:science+fiction",
      "AIzaSyCwEvhbYe_m5EPEWPygZHS4L5qlmuV8TcI",
    ],
    queryFn: async () => {
      const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=+subject:science+fiction&key=AIzaSyCwEvhbYe_m5EPEWPygZHS4L5qlmuV8TcI"
      );
      const data = await res.json();
      return data;
    },
  });

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = items?.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [items]);

  const handleAddToCart = (selectedProduct) => {
    console.log("selected product", selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  if (isLoading) return <p>Loading..</p>;
  return (
    <Layout>
      <div>
        <h1 className="text-center font-bold font-serif md:text-4xl text-xl p-4">
          Fiction Book{" "}
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-3">
          {items?.map((fbook) => (
            <FictionBookDetails
              handleAddToCart={handleAddToCart}
              fbook={fbook}
              key={fbook.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
