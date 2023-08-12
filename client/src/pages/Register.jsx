import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState();

  const handleChanged = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs, {
        withCredentials: true,
      });
    } catch (error) {
      setErr(error.response.data);
    }
  };

  console.log(err);

  return (
    <div className="bg-purple-300 w-screen h-screen flex justify-center items-center">
      <div className="flex max-w-7xl">
        <div className="bg-white w-1/2 p-20 rounded-l-lg flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Register</h2>
          <form action="" className="flex flex-col gap-14">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="block border-b border-gray-300 py-4 w-full"
              onChange={handleChanged}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="block border-b border-gray-300 py-4 w-full"
              onChange={handleChanged}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="block border-b border-gray-300 py-4 w-full"
              onChange={handleChanged}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="block border-b border-gray-300 py-4 w-full"
              onChange={handleChanged}
            />
            {err && err}
            <button
              className="bg-purple-500 text-white w-1/2 py-4 px-8"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
        </div>
        <div className="w-1/2 p-20 flex flex-col gap-10 bg-[url('img/Login-bg.jpg')] text-white rounded-r-lg">
          <h1 className="font-extrabold text-8xl text-white">Yuto Social.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            cum. Voluptate ipsam molestiae omnis hic minima nemo a dignissimos
            molestias!
          </p>
          <span className="block">Do you have an account??</span>
          <Link to="/login">
            <button className="bg-white text-purple-600 w-1/2 py-4 px-16">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
