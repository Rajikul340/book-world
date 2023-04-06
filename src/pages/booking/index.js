import { useState } from "react";
import ItemDetails from "@/components/Product/FakeDb/BookingDetails";
import { useQuery } from "@tanstack/react-query";
import {
  getStoredCart,
  removeFromDb,
} from "@/components/Product/FakeDb/Fakedb";
import Layout from "@/components/Layout/Layout";




const Order = () => {
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
        "https://www.googleapis.com/books/v1/volumes?q=science&key=AIzaSyCwEvhbYe_m5EPEWPygZHS4L5qlmuV8TcI"
      );
      const data = await res.json();
      return data;
    },
  });

  const getCart = getStoredCart();
  const savedCart = [];

  for (const id in getCart) {
    const addedProduct = items?.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
      console.log(savedCart);
    }
  }

  const [cart, setCart] = useState(savedCart);
  

  const handleDetails = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <Layout>
      <div>
        <h1 className="text-center font-bold font-serif md:text-4xl text-xl p-4">
          Book Order List
        </h1>
        <div className="md:grid md:grid-cols-3 md: gap-5">
          {cart?.map((product) => (
            <ItemDetails
              handleDetails={handleDetails}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Order;
