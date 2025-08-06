import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-primary/30 shadow-primary/15 w-full max-w-sm rounded-lg border p-6 shadow-xl max-md:m-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full text-gray-600 sm:max-w-md"
          >
            <div className="flex flex-col">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="your email id"
                className="mb-6 border-b-2 border-gray-300 p-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.password)}
                value={password}
                type="password"
                required
                placeholder="your password"
                className="mb-6 border-b-2 border-gray-300 p-2 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 w-full cursor-pointer rounded py-3 font-medium text-white transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
