import Footer from "../components/Footer";
import Header from "../components/Header";
import lave_vaisselle_ouvert from "../assets/picture/lave-vaisselle-ouvert.jpg";
import lave_vaisselle_ferme from "../assets/picture/lave-vaisselle-ferme.jpg";
import lave_vaisselle_semi_ouvert from "../assets/picture/lave-vaisselle-semi-ouvert.jpg";
import micro_ondes from "../assets/picture/micro-ondes.jpg";
import oven from "../assets/picture/oven.jpg";
import melangeur from "../assets/picture/melangeur.jpg";
import toaster from "../assets/picture/toaster.jpg";

const ProductPage = () => {
    return (
        < div className="min-h-screen bg-green-vertical" >
            <Header />
            <main className="bg-green-700">
                <section className="py-8 bg-white md:py-16 bg-green-vertical">
                    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 relative">
                            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                <img
                                    src={lave_vaisselle_ouvert}
                                    alt="Sample"
                                    className="rounded-3xl border border-2 border-black h-[80%]"
                                />
                            </div>
                            <div className="absolute -top-10 left-14 w-28 h-28 bg-red-500 rounded-full text-white flex items-center justify-center rounded-full max-xl:left-0 max-lg:left-24 max-md:left-0">
                                    Garantie
                                    7
                                    ans
                                </div>
                            <div className="mt-4 lg:mt-0">
                                <h1 className="text-xl font-extrabold text-white sm:text-2xl dark:text-white">
                                    Lave Vaisselle LAVANG
                                </h1>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p className="text-2xl font-bold text-white sm:text-3xl dark:text-white mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2" viewBox="0 0 448 512" fill="currentColor">
                                            <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                        </svg>
                                        600 €
                                    </p>
                                </div>
                                <h1 className="text-xl font-semibold text-white sm:text-2xl dark:text-white mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2" viewBox="0 0 448 512" fill="currentColor">
                                        <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z" />
                                    </svg>
                                    Consommation : A+++
                                </h1>
                                <h1 className="text-xl font-semibold text-white sm:text-2xl dark:text-white mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2" viewBox="0 0 512 512" fill="currentColor">
                                        <path d="M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z" />
                                    </svg>

                                    Capacité : 16 couverts
                                </h1>
                                <h1 className="text-xl font-semibold text-white sm:text-2xl dark:text-white mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2" viewBox="0 0 512 512" fill="currentColor">
                                        <path d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z" />
                                    </svg>
                                    Programmes : 4
                                </h1>
                                <h1 className="text-xl font-semibold text-white sm:text-2xl dark:text-white mb-16 max-md:mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2" viewBox="0 0 448 512" fill="currentColor">
                                        <path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" />
                                    </svg>
                                    Niveau sonore : Très faible
                                </h1>
                                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-2 border-black hover:bg-gray-200 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        role="button"
                                    >
                                        <svg
                                            className="w-5 h-5 -ms-2 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                            />
                                        </svg>
                                        Ajouter à mes favoris
                                    </a>

                                    <a
                                        href="#"
                                        className="text-white mt-4 sm:mt-0 bg-[#639D87] hover:bg-[#1E4347] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg border border-2 border-black text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center max-md:mb-4"
                                        role="button"
                                    >
                                        <svg
                                            className="w-5 h-5 -ms-2 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                            />
                                        </svg>
                                        Ajouter au panier
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h1 className="flex py-2.5 px-5 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-2 border-black hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Découvrez notre lave-vaisselle ultra-performant, parfait allié de votre cuisine moderne. Avec une efficacité énergétique de classe A, ce lave-vaisselle vous permet de réaliser des économies d'énergie tout en respectant l'environnement. Sa capacité maximale de 8 kg est idéale pour les familles nombreuses ou les repas de fête, offrant une grande flexibilité grâce à son panier ajustable. Doté d'une puissance d'essorage de 1400 tours par minute, il assure un nettoyage impeccable et un séchage rapide de votre vaisselle. Simplifiez votre quotidien avec ce lave-vaisselle à la fois efficace, économique et écologique.
                        </h1>
                    </div>
                </section>
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
                <section id="testimonials" aria-label="What our customers are saying" className="bg-green-horizontal py-20 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl md:text-center">
                            <h2 className="font-bold text-3xl tracking-tight text-white sm:text-4xl">Ce que nos clients disent de ce produit</h2>
                        </div>
                        <ul role="list"
                            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                            <li>
                                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                    <li>
                                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                            width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                        </svg>
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">Lave Vaisselle de grande qualité et avec un prix très compétitif.Je recommande vivement ArchiDeco.</p>
                                            </blockquote>
                                            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                                <div>
                                                    <div className="font-display text-base text-slate-900">Didier Bernard</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-slate-50">
                                                    <img alt="" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/15.jpg" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                    <li>
                                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                            width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                        </svg>
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">Lave Vaisselle de grande qualité et avec un prix très compétitif.Je recommande vivement ArchiDeco.</p>
                                            </blockquote>
                                            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                                <div>
                                                    <div className="font-display text-base text-slate-900">Stéphanie Patom</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-slate-50">
                                                    <img alt="" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/women/15.jpg" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                    <li>
                                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                            width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                        </svg>
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">Lave Vaisselle de grande qualité et avec un prix très compétitif.Je recommande vivement ArchiDeco.</p>
                                            </blockquote>
                                            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                                <div>
                                                    <div className="font-display text-base text-slate-900">Pascal Leroy</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-slate-50">
                                                    <img alt="" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/10.jpg" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="bg-white">
                    <Footer />
                </div>
            </main>
        </div >
    )
}

export default ProductPage