import Footer from "../components/Footer";
import { ChangeEvent, useState } from "react";
import Header from "../components/Header";
import famille from "../assets/picture/famille.jpg";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { register } from "../Requests/AuthRequest";

const RegisterPage = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(null);
  const [cgvChecked, setCgvChecked] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValid: boolean = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (firstname.length < 3) {
      isValid = false;
    } else {
      isValid = true;
    }

    if (lastname.length < 2) {
      isValid = false;
    } else {
      isValid = true;
    }

    if (!emailRegex.test(email)) {
      isValid = false;
    } else {
      isValid = true;
    }

    if (password !== passwordConfirmation) {
      setPasswordIsValid(false);
      isValid = false;
    } else {
      setPasswordIsValid(true);
    }

    if (password.length && passwordConfirmation.length < 6) {
      setPasswordIsValid(false);
      isValid = false;
    } else {
      setPasswordIsValid(true);
    }

    if (!cgvChecked) {
      setCgvChecked(false);
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await register(firstname, lastname, email, password);
        console.log(response)
        if (typeof response === 'string') {
          setError(response);
          toast({
            title: "Erreur d'inscription",
            description: error,
            status: 'error',
            duration: 4000,
            isClosable: true,
          });
        } else {
          console.log(response)
          toast({
            title: "Inscription réussie",
            description: response.message,
            status: 'success',
            duration: 4000,
            isClosable: true,
          });
          navigate('/login');
        }
      } catch (err: any) {
        toast({
          title: "Erreur d'inscription",
          description: err.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center">
      <Header />
      <main className="flex justify-center items-center bg-green-vertical">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-lg max-lg:hidden border-2">
          <img src={famille} alt="famille" className="w-full h-auto rounded-lg" />
        </div>
        <div className="mb-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white px-10 pb-5 rounded-lg max-md:mx-5 relative">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white bg-[#639D87] rounded-t-lg absolute left-0 w-full py-2">
              Inscription
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900 max-md:px-2"
                >
                  Prénom
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    minLength={3}
                    value={firstname}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFirstname(e.target.value)
                    }
                    type="text"
                    className="block w-full py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 border-b-2 border-[#639D87] outline-none"
                  />
                  {/* {firstname.length < 3 && (
                    <p className="text-red-500/55 text-sm mt-2">
                      Le prénom doit contenir au moins 3 caractères
                    </p>
                  )} */}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900 max-md:px-2"
                >
                  Nom
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    minLength={2}
                    value={lastname}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setLastname(e.target.value)
                    }
                    type="text"
                    className="block w-full py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 border-b-2 border-[#1E4347] outline-none"
                  />
                </div>
              </div>
            </div>
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
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  type="email"
                  required
                  className="block w-full py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 border-b-2 border-[#639D87] outline-none"
                ></input>
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
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  type="password"
                  minLength={6}
                  placeholder="Au moins 6 caractères"
                  required
                  className="block w-full py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 border-b-2 border-[#1E4347] outline-none"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password-confirmation"
                  className="block text-sm font-medium leading-6 text-gray-900 max-md:px-2"
                >
                  Confirmation du mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password-confirmation"
                  name="password-confirmation"
                  value={passwordConfirmation}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPasswordConfirmation(e.target.value)
                  }
                  type="password"
                  minLength={6}
                  required
                  className="block w-full py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 border-b-2 border-[#639D87] outline-none"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <input
                  id="cgv"
                  name="cgv"
                  type="checkbox"
                  checked={cgvChecked}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCgvChecked(e.target.checked)
                  }
                  className="h-4 w-4 text-[#639D87] focus:ring-[#639D87] border-gray-300 rounded"
                />
                <label htmlFor="cgv" className="ml-2 block text-sm text-gray-900">
                  J'accepte les conditions générales de vente
                </label>
              </div>
              {cgvChecked == false && (
                <p className="text-red-500/55 text-sm mt-2">
                  Vous devez accepter les conditions générales de vente
                </p>
              )}
              {passwordIsValid === false && (
                <p className="text-red-500/55 text-sm mt-2">
                  Les mots de passe ne correspondent pas
                </p>
              )}

              <button
                type="submit"
                className="mt-4 flex w-full justify-center rounded-md bg-[#639D87] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E4347] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#639D87]"
              >
                S'inscrire
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            Déjà membre ?
            <a
              href="/login"
              className="font-semibold leading-6 text-[#639D87] hover:text-[#1E4347]"
            >
              {" "}
              Connectez-vous !
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;