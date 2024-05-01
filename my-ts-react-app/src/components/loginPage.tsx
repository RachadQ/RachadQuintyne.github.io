import React from 'react';
import BaseLayout from './defaults/baseLayout';
import '../styles/styles.css';

const Login: React.FC = () => {
  return (
    <BaseLayout>
   <div className="relative bg-white rounded-lg shadow w-1/2 mx-auto mt-12">
                <div className="p-5">
                    <div className="text-center">
                        <p className="mb-3 text-2xl font-semibold leading-5 text-gray-900">Login to your account</p>
                        <p className="mt-2 text-sm leading-4 text-gray-600">You must be logged in to perform this action.</p>
                    </div>

                    <div className="mt-7 space-y-2">
                        <button className="inline-flex w-full items-center justify-center gap-2 rounded border border-gray-300 bg-white p-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-5 w-5" />
                            Continue with GitHub
                        </button>

                        <button className="inline-flex w-full items-center justify-center gap-2 rounded border border-gray-300 bg-white p-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                            Continue with Google
                        </button>

                        <button className="inline-flex w-full items-center justify-center gap-2 rounded border border-gray-300 bg-white p-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                            Continue with LinkedIn
                        </button>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <div className="h-px w-full bg-gray-200"></div>
                        <span className="mx-3 text-sm text-gray-500">OR</span>
                        <div className="h-px w-full bg-gray-200"></div>
                    </div>

                    <form className="mt-6 space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input type="email" id="email" autoComplete="email" required className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:ring-gray-300 focus:border-gray-300" placeholder="Email Address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" id="password" autoComplete="current-password" required className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:ring-gray-300 focus:border-gray-300" placeholder="Password" />
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            Login
                        </button>
                    </form>

                    <div className="text-sm text-center mt-4">
                        <a href="/forgot-password" className="text-blue-600 hover:text-blue-500">Forgot your password?</a>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account? <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
                    </div>
                </div>
            </div>
  </BaseLayout>)
  ;
};

export default Login ;