import Footer from "../components/Footer"
import axios from 'axios';
import { useState } from 'react';

const RegisterPage = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/register", {
            firstname,
            lastname,
            email,
            password,
            passwordConfirmation,
        });
        console.log(response);
    };
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Créez votre compte !</h2>
            </div>
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                Prénom
                            </label>
                            <div className="mt-2">
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#639D87] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                Nom
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#639D87] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Adresse Mail</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#639D87] sm:text-sm sm:leading-6">
                            </input>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#639D87] sm:text-sm sm:leading-6">
                            </input>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password-confirmation" className="block text-sm font-medium leading-6 text-gray-900">Confirmation du mot de passe</label>
                        </div>
                        <div className="mt-2">
                            <input id="password-confirmation" name="password-confirmation" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#639D87] sm:text-sm sm:leading-6">
                            </input>
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-[#639D87] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E4347] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#639D87]">S'inscrire</button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Déjà membre ?
                    <a href="/login" className="font-semibold leading-6 text-[#639D87] hover:text-[#1E4347]"> Connectez-vous !</a>
                </p>
            </div><br />
            <Footer />
        </div>
    )
}

export default RegisterPage
