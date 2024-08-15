import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const defaultLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default defaultLayout;
