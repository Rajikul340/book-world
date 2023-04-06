
import Layout from "@/components/Layout/Layout";
import { useQuery } from "@tanstack/react-query";


const Product = () => {

  const {
        data: fictionBook = [],
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
    
  return (
    <Layout>
      <div>
        <h1>this is index pages </h1>
      </div>
    </Layout>
  );
};

export default Product;
