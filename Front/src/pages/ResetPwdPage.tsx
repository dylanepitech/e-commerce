import Header from "../components/Header";
import Footer from "../components/Footer";

const ResetPwd = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow bg-custom-bg">
        <div className="w-full max-w-md">
          <form
            className="bg-green-light shadow-md rounded px-8 pt-6 pb-8 mb-4"
            method="POST"
          >
            <h1 className="text-2xl font-bold text-center mb-6">
              Mot de passe oublié ?
            </h1>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Adresse e-mail :
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="exemple@email.com"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-custom-bg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
                type="submit"
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPwd;
