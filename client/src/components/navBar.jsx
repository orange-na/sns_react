import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { createBrowserRouter, RouterProvider, Outlet, Navigate, Link } from "react-router-dom";


function NavBar() {

    return (
        <nav className='h-20 flex items-center border-b border-gray-300'>
            <div className='flex justify-between items-center w-full mx-10 m-auto'>
                <div className='flex items-center gap-7'>
                    <Link to='/'>
                        <span className='font-bold text-2xl text-blue-800'>YutoCode</span>
                    </Link>
                    <HomeOutlinedIcon />
                    <DarkModeOutlinedIcon />
                    <GridViewOutlinedIcon />
                    <span className='border border-gray-300'>
                        <SearchOutlinedIcon />
                        <input type="search" placeholder='Search' className='p-2 w' />
                    </span>
                </div>
                <div className='flex gap-7'>
                    <AccountCircleOutlinedIcon />
                    <EmailOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />
                </div>
            </div>
        </nav>
    )
  }
  
  export default NavBar
  