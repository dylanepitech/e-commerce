import { ChangeEvent, useContext, useState } from "react";
import Footer from "../components/Footer";
import axios, { AxiosResponse } from "axios";
import Header from "../components/Header";
import famille from "../assets/picture/famille.jpg";
import { AuthContext } from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erreur, setErreur] = useState<boolean>(false);
  const [messageErreur, setMessageErreur] = useState<string>("");
  const { setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();

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
        localStorage.setItem("authToken", response.data.token);
        setAuthToken(response.data.token);
        navigate("/dashboard");
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
      <main className="flex justify-center items-center bg-green-vertical">
        {erreur && (
          <p className="text-center text-red-500/50 text-sm">{messageErreur}</p>
        )}
        <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-10 rounded-lg max-md:p-5 relative">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white bg-[#639D87] rounded-t-lg absolute left-0 top-0 w-full py-2">
              Connexion
            </h2>
          </div>
          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black max-md:px-2"
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
                  className="block w-full py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 border-b-2 border-[#639D87] outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black max-md:px-2"
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
                  className="block w-full py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 border-b-2 border-[#1E4347] outline-none"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center border-2 rounded-md border-black bg-[#639D87] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E4347] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#639D87]"
              >
                Se connecter
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-black">
            Pas encore de compte ?
            <a
              href="/register"
              className="font-semibold leading-6 text-[#1E4347]"
            >
              {" "}
              Créez-en un !
            </a>
          </p>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-lg max-lg:hidden border-2">
          <img
            src={famille}
            alt="famille"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
