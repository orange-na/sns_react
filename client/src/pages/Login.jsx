import { Link } from "react-router-dom";


function Login() {

    return (
        <div className="bg-purple-300 w-screen h-screen flex justify-center items-center">
            <div className="flex max-w-7xl">
                <div className="w-1/2 p-20 flex flex-col gap-10 bg-[url('img/Login-bg.jpg')] text-white rounded-l-lg">
                    <h1 className="font-extrabold text-8xl text-white">Hello World.</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, cum. Voluptate ipsam molestiae omnis hic minima nemo a dignissimos molestias!
                    </p>
                    <span className="block">Don't you have an account??</span>
                    <Link to='/register'>
                        <button className="bg-white text-purple-600 w-1/2 py-4 px-16">Register</button>
                    </Link>
                </div>
                <div className="bg-white w-1/2 p-20 rounded-r-lg flex flex-col gap-10">
                    <h2 className="text-4xl font-bold">Login</h2>
                    <form action="" className="flex flex-col gap-14">
                        <input type="text" placeholder="Username" className="block border-b border-gray-300 py-4 w-full"/>
                        <input type="password" placeholder="Password" className="block border-b border-gray-300 py-4 w-full"/>
                        <button className="bg-purple-500 text-white w-1/2 py-4 px-8">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
  }
  
  export default Login
  