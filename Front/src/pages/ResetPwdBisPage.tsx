import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ResetPwdBis = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmed, setShowPasswordConfirmed] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowPasswordConfirmed = () => setShowPasswordConfirmed(!showPasswordConfirmed);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow bg-custom-bg">
        <div className="w-full max-w-md">
          <form className="bg-green-light shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST">
            <h1 className="text-2xl font-bold text-center mb-6">Mot de passe oublié ?</h1>
            <div className="mb-4 relative">
              <label className="block font-bold mb-2" htmlFor="password">
                Nouveau mot de passe :
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******************"
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>
            <div className="mb-6 relative">
              <label className="block font-bold mb-2" htmlFor="passwordConfirmed">
                Confirmer nouveau mot de passe :
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  id="passwordConfirmed"
                  name="passwordConfirmed"
                  type={showPasswordConfirmed ? "text" : "password"}
                  placeholder="******************"
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPasswordConfirmed}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
                >
                  <i className={`fas ${showPasswordConfirmed ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-custom-bg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Réinitialiser
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPwdBis;
