import Image from "next/image";



const HistoryBookDetails = ({fbook, handleAddToCart}) => {

    // console.log('book detals',fbook);
     const {imageLinks,title, publisher} = fbook.volumeInfo
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><Image unoptimized src={imageLinks?.smallThumbnail} width={300} height={90} className="w-80" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Writer: <strong>{publisher}</strong></p>
          <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(fbook)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default HistoryBookDetails;