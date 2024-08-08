const Reviews = () => {
    return (
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
    )
}

export default Reviews