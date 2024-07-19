import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function ErrorPage(): ReactElement {
  return (
    <div className="w-screen h-dvh flex items-center justify-center gap-4 flex-col">
      <h1 className="text-6xl tracking-widest">E-commerce</h1>
      <img src="./404.gif" alt="" />
      <h2 className="text-4xl">Oups... Une érreur est survenue</h2>
      <p className="text-xl">
        Retourner en l'accueil
        <Link className="text-blue-500" to={"/"}>
          ici
        </Link>
      </p>
    </div>
  );
}
