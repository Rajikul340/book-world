import Image from "next/image";


const ItemDetails = ({ product, handleDetails }) => {
  console.log("product", product);
  const { imageLinks, title, publisher } = product.volumeInfo;

  return (
   
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure>
          <Image src={imageLinks?.smallThumbnail} className="w-80" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            Writer: <strong>{publisher}</strong>
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleDetails(product.id)}
            >

              delete
            </button>
          </div>
        </div>
      </div>

  );
};

export default ItemDetails;
