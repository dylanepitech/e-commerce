import { ChangeEvent, useState } from "react";
import Footer from "../components/Footer";
import axios, { AxiosResponse } from "axios";
import Header from "../components/Header";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erreur, setErreur] = useState<boolean>(false);
  const [messageErreur, setMessageErreur] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setMessageErreur("");
    setErreur(false);
    e.preventDefault();
    try {
      const response: AxiosResponse<any> = await axios.post(
        "http://127.0.0.1:8000/api/login_check",
        {
          email,
          password,
        }
      );
      if (response.data.token) {
        console.log(response.data.token);
        // Rediriger vers la page d'accueil ou une autre page
        window.location.href = "/dashboard";
      } else {
        setErreur(true);
        setMessageErreur("Votre email ou mot de passe est invalide");
      }
    } catch (error) {
      setErreur(true);
      setMessageErreur("Votre email ou mot de passe est invalide");
      console.error(`error ${error}`);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center">
            <Header />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Connectez-vous à votre compte !
        </h2>
      </div>
      {erreur && (
        <p className="text-center text-red-500/50 text-sm">{messageErreur}</p>
      )}
      <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 max-md:px-2"
            >
              Adresse Mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#639D87] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 max-md:px-2"
              >
                Mot de passe
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#639D87] hover:text-[#1E4347] max-md:pr-2"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#639D87] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#639D87] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E4347] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#639D87]"
            >
              Se connecter
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Pas encore de compte ?
          <a
            href="/register"
            className="font-semibold leading-6 text-[#639D87] hover:text-[#1E4347]"
          >
            {" "}
            Créez-en un !
          </a>
        </p>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default LoginPage;
