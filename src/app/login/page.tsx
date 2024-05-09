import Link from "next/link";

import LoginForm from "components/LoginForm";
import Logo from "components/Logo";

const Login = () => (
  <main>
    <header className="bg-primary text-white py-4 px-6">
      <Logo />
    </header>
    <section className="flex justify-center items-center h-[calc(100vh-6rem)]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[80%] md:w-[40rem]">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <LoginForm />
        <div className="mt-8 text-center text-xl">
          <Link className="text-black hover:text-primary" href="#">
            Forgot Password?
          </Link>
          <div className="mt-2 text-xl">
            Do not have an account?{" "}
            <Link className="text-primary" href="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Login;
