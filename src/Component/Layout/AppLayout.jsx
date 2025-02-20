import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export default function AppLayout() {
  return (
    <div className="flex justify-center">
      <div className="   w-400 h-184  bg-gradient-to-bl  from-rose-100 via-gray-100 to-gray-200 ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
