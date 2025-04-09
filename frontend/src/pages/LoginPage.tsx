import loginPic from '../assets/login.png';
export default function LoginPage() {
  return (
    <div className="flex flex-row  h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-1/2 h-full">
        <h3 className="font-bold text-blue-600">Momentum</h3>
        <h1 className="font-bold text-blue-600">Artificial Intelligence Driving</h1>
        <h1 className="font-bold text-blue-600">Task Management</h1>
        <form>
          <div className=" relative">
            <label
              htmlFor="email"
              className="absolute top-2 left-4 text-gray-500 text-sm transition-all"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full pt-6 pb-2 px-4 border border-gray-300 rounded text-gray-700"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="absolute top-2 left-4 text-gray-500 text-sm transition-all"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full pt-6 pb-2 px-4 border border-gray-300 rounded text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
      <div className="bg-purple-600 w-1/2 h-full">
        <div className="flex items-center justify-center h-full">
          <img src={loginPic} alt="Login" className="w-3/4" />
        </div>
      </div>
    </div>
  );
}
