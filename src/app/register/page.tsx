import Link from "next/link";

import Logo from "components/Logo";
import RegisterForm from "components/RegisterForm";

const register = () => (
  <main>
    <header className="bg-primary text-white py-4 px-6">
      <Logo />
    </header>
    <section className="flex justify-center items-center h-[calc(100vh-6rem)]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[80%] md:w-[40rem]">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <RegisterForm />
        <div className="mt-8 text-center text-xl">
          <div className="mt-2 text-xl">
            Already have an account?{" "}
            <Link className="text-primary" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default register;
