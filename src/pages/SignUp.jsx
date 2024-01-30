import React from 'react';


const SignUp = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-green-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-white mb-6">Sign up to start listening</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
