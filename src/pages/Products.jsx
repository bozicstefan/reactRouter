import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <li>{product.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Products;
