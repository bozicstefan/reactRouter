import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details </h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        <button>Back</button>
      </Link>
    </>
  );
};

export default ProductDetails;
