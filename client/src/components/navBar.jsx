import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Link,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function NavBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="h-20 flex items-center border-b border-gray-300 sticky top-0 bg-white z-10">
      <div className="flex justify-between items-center w-full mx-10 m-auto">
        <div className="flex items-center gap-7">
          <Link to="/">
            <span className="font-bold text-2xl text-blue-800">YutoCode</span>
          </Link>
          <HomeOutlinedIcon />
          <DarkModeOutlinedIcon />
          <GridViewOutlinedIcon />
          <span className="border border-gray-300 rounded-md px-3">
            <SearchOutlinedIcon />
            <input
              type="search"
              placeholder="Search"
              className="p-2 w-[500px]"
            />
          </span>
        </div>
        <div className="flex items-center gap-7">
          <AccountCircleOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
          <div className="flex items-center gap-3">
            <img
              src="img/Login-bg.jpg"
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
