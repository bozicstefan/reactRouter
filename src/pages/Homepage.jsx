import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>Homepage</h1>
      <p>
        Go back to <button onClick={navigateHandler}>Products</button>
      </p>
    </>
  );
};

export default Home;
