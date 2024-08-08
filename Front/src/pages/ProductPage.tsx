import React, { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reviews from '../components/Reviews';
import lave_vaisselle_ouvert from "../assets/picture/lave-vaisselle-ouvert.jpg";
import lave_vaisselle_ferme from "../assets/picture/lave-vaisselle-ferme.jpg";
import lave_vaisselle_semi_ouvert from "../assets/picture/lave-vaisselle-semi-ouvert.jpg";
import micro_ondes from "../assets/picture/micro-ondes.jpg";
import oven from "../assets/picture/oven.jpg";
import melangeur from "../assets/picture/melangeur.jpg";
import toaster from "../assets/picture/toaster.jpg";
import garanti from "../assets/picture/Logo_7_ans_15.png";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-900 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="pb-4 pr-4">
                    {children}
                </div>
            )}
        </div>
    );
};

const ProductPage = () => {
    const [mainImage, setMainImage] = useState(lave_vaisselle_ouvert);
    const updateMainImage = (image: string) => {
        setMainImage(image);
    };

    return (
        < div className="min-h-screen bg-green-vertical" >
            <Header />
            <main className="bg-green-700">
                <div className="bg-green-vertical">
                    <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
                        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12 mt-8 mb-8">
                            <div className="w-full top-0 gap-2 relative">
                                <img src={garanti} alt="garanti" className="w-20 object-cover right-20 -top-8 absolute max-sm:right-14 max-[321px]:right-10" />
                                <img src={mainImage} alt="Lave Vaisselle Ouvert" className="w-4/5 rounded-md object-cover border-black border-2" />
                                <div className="w-20 flex gap-4 mt-4">
                                    <img src={lave_vaisselle_semi_ouvert} alt="Lave Vaisselle semi ouvert" className="w-full cursor-pointer rounded-md border-black border-2" onClick={() => updateMainImage(lave_vaisselle_semi_ouvert)} />
                                    <img src={lave_vaisselle_ferme} alt="Lave Vaisselle fermé" className="w-full cursor-pointer rounded-md border-black border-2" onClick={() => updateMainImage(lave_vaisselle_ferme)} />
                                </div>
                            </div>
                            <div className="bg-white rounded-md p-4 shadow-lg">
                                <h2 className="text-2xl font-bold text-[#1E4347] mb-2">Lave Vaiselle LAVANG</h2>
                                <hr />
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <p className="text-black text-xl font-bold">250 €</p>
                                    <p className="text-gray-400 text-xl"><span className="line-through">300 €</span></p>
                                </div>
                                <div className="flex items-center mt-6">
                                    <div className="flex space-x-1">
                                        <svg className="w-5 fill-[#639D87]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-[#639D87]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-[#639D87]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-[#639D87]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                    </div>
                                    <p className='underline text-lg'><a href="#"><span className="text-[#639D87] ml-4">28</span> avis.</a></p>
                                </div>
                                <p className='mt-6'>Paiement en 4 fois disponible avec <span className="text-[#639D87]">Klarna.</span></p>
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-gray-800">A propos du produit</h3>
                                    <p>Découvrez notre lave-vaisselle économe en eau et en énergie, ultra-silencieux et doté de jets haute pression pour un nettoyage impeccable sans prélavage. Ses programmes de lavage personnalisés s'adaptent à tous vos besoins pour un résultat parfait à chaque utilisation.</p>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <button type="button" className="w-full mt-8 px-6 py-3 bg-[#639D87] text-white text-sm font-semibold rounded-md border-2 border-black">Ajouter au panier</button>
                                    <button type="button" className="w-auto mt-8 px-6 py-3 bg-gray-200 text-black text-sm font-semibold rounded-md border-2 border-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <Accordion title="Caractéristiques">
                                        <ul className="list-disc pl-5">
                                            <li>Capacité : 14 couverts</li>
                                            <li>Classe énergétique : A+++</li>
                                            <li>Niveau sonore : 42 dB</li>
                                            <li>Programmes : 6 programmes dont Eco, Intensif, Rapide</li>
                                            <li>Technologie : AquaSensor pour une consommation d'eau optimisée</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="Spécifications techniques">
                                        <ul className="list-disc pl-5">
                                            <li>Dimensions (HxLxP) : 85 x 60 x 60 cm</li>
                                            <li>Consommation d'eau : 9.5L par cycle</li>
                                            <li>Consommation électrique : 0.93 kWh par cycle</li>
                                            <li>Matériau de la cuve : Acier inoxydable</li>
                                            <li>Système de séchage : Ventilation active</li>
                                        </ul>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col min-h-screen bg-white p-8">
                    <div className="flex flex-col items-center justify-center flex-grow text-center">
                        <h2 className="text-3xl text-custom-bg pl-12 pr-12 mt-12 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-green-light before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-9 after:h-2 after:bg-green-light after:-translate-y-1/2 after:rounded-full">
                            Les composants de buanderie qui pourraient vous plaire
                        </h2>
                    </div>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                <div className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-bl-3xl rounded-tl-3xl lg:aspect-none group-hover:opacity-75 lg:h-80 border border-[#1E4347] border-4 p-4">
                                        <img src={micro_ondes} alt="#" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href="#">
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    Micro-Ondes
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">En savoir plus</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">A partir de 80 €</p>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border border-[#639D87] border-4 p-4 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src={melangeur} alt="#" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href="#">
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    Mixeur
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">En savoir plus</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">A partir de 40 €</p>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border border-[#639D87] border-4 p-4 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src={oven} alt="#" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href="#">
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    Four
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">En savoir plus</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">A partir de 600 €</p>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-br-3xl rounded-tr-3xl lg:aspect-none group-hover:opacity-75 lg:h-80 border border-[#1E4347] border-4 p-4">
                                        <img src={toaster} alt="#" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href="#">
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    Toaster
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">En savoir plus</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">A partir de 40 €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Reviews />
                <div className="bg-white">
                    <Footer />
                </div>
            </main>
        </div >
    )
}

export default ProductPage