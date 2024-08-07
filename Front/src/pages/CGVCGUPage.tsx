import Header from "../components/Header";
import Footer from "../components/Footer";

const CGVCGUPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-custom-bg  p-8 font-sans">
        <div className="container mx-auto max-w-4xl">
          <section className="bg-white rounded-lg p-8 mb-12 shadow-lg">
            <h2 className="text-3xl mb-6 text-center gotham-bold">
              Conditions Générales de Vente
            </h2>
            <p className="mb-6 gotham-book-italic text-xs">
              Dernière mise à jour : 07/08/2024
            </p>
            <br />

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl gotham-book font-bold">
                  Introduction
                </h3>
                <p className="leading-relaxed">
                  Les présentes conditions générales de vente (CGV) s'appliquent
                  à toutes les commandes passées auprès de ArchiDeco pour
                  l'ensemble des produits et services proposés sur le site
                  archideco.com. En passant commande, le client accepte sans
                  réserve les présentes conditions. Les CGV peuvent être
                  modifiées à tout moment par ArchiDeco. Les conditions
                  applicables sont celles en vigueur à la date de la commande
                  par le client.
                </p>
              </div>

              <div>
                <h3 className="text-2xl gotham-book font-bold">
                  Produits et Services
                </h3>
                <p className="leading-relaxed">
                  Les produits proposés à la vente sont ceux qui figurent sur le
                  site archideco.com au jour de la consultation du site par
                  l'utilisateur, dans la limite des stocks disponibles.
                  ArchiDeco se réserve le droit de modifier à tout moment
                  l'assortiment de produits. Les photographies des produits ne
                  sont pas contractuelles et ne peuvent engager la
                  responsabilité de ArchiDeco.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Commandes
                </h3>
                <p className="leading-relaxed">
                  Les commandes peuvent être passées en ligne sur le site
                  archideco.com. La validation de la commande par le client vaut
                  acceptation des présentes CGV. ArchiDeco confirmera la
                  commande par l'envoi d'un e-mail. Les informations énoncées
                  par le client lors de la prise de commande engagent celui-ci :
                  en cas d'erreur dans le libellé des coordonnées du
                  destinataire, ArchiDeco ne saurait être tenu responsable de
                  l'impossibilité de livrer le produit.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">Prix</h3>
                <p className="leading-relaxed">
                  Les prix sont indiqués en euros, toutes taxes comprises (TTC),
                  hors frais de livraison. ArchiDeco se réserve le droit de
                  modifier ses prix à tout moment, mais les produits seront
                  facturés sur la base des tarifs en vigueur au moment de
                  l'enregistrement de la commande. Les offres de prix et les
                  promotions sont valables tant qu'elles sont visibles sur le
                  site.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Paiement
                </h3>
                <p className="leading-relaxed">
                  Le règlement des commandes s'effectue par carte bancaire ou
                  tout autre moyen de paiement proposé sur le site
                  archideco.com. Le paiement est exigible à la commande. En cas
                  de paiement par chèque ou virement bancaire, la commande ne
                  sera traitée qu'à réception du paiement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Livraison
                </h3>
                <p className="leading-relaxed">
                  Les produits sont livrés à l'adresse de livraison indiquée
                  lors de la commande. Les délais de livraison sont donnés à
                  titre indicatif et ne peuvent donner lieu à des dommages et
                  intérêts ou à l'annulation de la commande en cas de
                  dépassement. En cas de produits manquants ou détériorés, le
                  client devra formuler toutes les réserves nécessaires sur le
                  bon de commande à réception desdits produits.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Droit de rétractation
                </h3>
                <p className="leading-relaxed">
                  Conformément à la législation en vigueur, le client dispose
                  d'un délai de 14 jours à compter de la réception des produits
                  pour exercer son droit de rétractation sans avoir à justifier
                  de motifs ni à payer de pénalités. Les produits doivent être
                  retournés dans leur état d'origine et complets (emballage,
                  accessoires, notice...), permettant leur recommercialisation à
                  l'état neuf, accompagnés de la facture d'achat.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Garantie
                </h3>
                <p className="leading-relaxed">
                  Tous les produits fournis par ArchiDeco bénéficient de la
                  garantie légale de conformité et de la garantie contre les
                  vices cachés. En cas de non-conformité d'un produit vendu, il
                  pourra être retourné, échangé ou remboursé. Toutes les
                  réclamations, demandes d'échange ou de remboursement doivent
                  s'effectuer par voie postale à l'adresse suivante : 4 rue Paul
                  Cézanne, 93360 Neuilly Plaisance, dans le délai de trente
                  jours de la livraison.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Responsabilité
                </h3>
                <p className="leading-relaxed">
                  ArchiDeco ne saurait être tenue pour responsable des dommages
                  résultant d'une mauvaise utilisation du produit acheté. La
                  responsabilité de ArchiDeco sera en tout état de cause limitée
                  au montant de la commande. Le client est seul responsable du
                  choix des produits, de leur conservation et de leur
                  utilisation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">Litiges</h3>
                <p className="leading-relaxed">
                  Les présentes CGV sont soumises à la loi française. En cas de
                  litige, une solution amiable sera recherchée avant toute
                  action judiciaire. À défaut, les tribunaux français seront
                  seuls compétents. Pour toute contestation relative à
                  l'exécution ou l'interprétation des présentes conditions, seul
                  sera compétent le tribunal du siège social de ArchiDeco.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl mb-6 text-center gotham-bold">
              Conditions Générales d'Utilisation
            </h2>
            <p className="mb-6 gotham-book-italic text-xs font-semibold">
              Dernière mise à jour : 07/08/2024
            </p>
            <br />

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Introduction
                </h3>
                <p className="leading-relaxed">
                  Les présentes conditions générales d'utilisation (CGU)
                  régissent l'utilisation du site archideco.com. En accédant et
                  en utilisant le site, l'utilisateur accepte les présentes
                  conditions. Les CGU peuvent être modifiées à tout moment par
                  ArchiDeco. Les conditions applicables sont celles en vigueur à
                  la date de l'utilisation du site par l'utilisateur.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Accès au site
                </h3>
                <p className="leading-relaxed">
                  L'accès au site archideco.com est gratuit. Tous les coûts
                  relatifs à l'accès au site, que ce soient les frais matériels,
                  logiciels ou d'accès à internet, sont exclusivement à la
                  charge de l'utilisateur. ArchiDeco se réserve le droit de
                  suspendre, d'interrompre ou de limiter sans préavis l'accès à
                  tout ou partie du site.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Propriété Intellectuelle
                </h3>
                <p className="leading-relaxed">
                  Le contenu du site, incluant, de façon non limitative, les
                  textes, images, et graphismes, est la propriété exclusive de
                  ArchiDeco. Toute reproduction, représentation, ou diffusion,
                  en tout ou partie, du contenu de ce site est interdite sans
                  l'autorisation expresse de ArchiDeco. Toute utilisation non
                  autorisée du site ou de son contenu engage la responsabilité
                  de l'utilisateur et constitue une contrefaçon sanctionnée par
                  le Code de la propriété intellectuelle.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Données Personnelles
                </h3>
                <p className="leading-relaxed">
                  ArchiDeco s'engage à protéger les données personnelles des
                  utilisateurs. Les informations recueillies font l’objet d’un
                  traitement informatique destiné à la gestion des commandes et
                  à l'amélioration de nos services. Conformément à la loi
                  Informatique et Libertés, l'utilisateur dispose d'un droit
                  d'accès, de rectification et d'opposition aux données
                  personnelles le concernant. Pour exercer ce droit,
                  l'utilisateur doit envoyer une demande écrite à 4 rue Paul
                  Cézanne, 93360 Neuilly Plaisance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Responsabilité
                </h3>
                <p className="leading-relaxed">
                  ArchiDeco met tout en œuvre pour offrir aux utilisateurs des
                  informations et/ou des outils disponibles et vérifiés, mais ne
                  saurait être tenue pour responsable des erreurs, d'une absence
                  de disponibilité des informations et/ou de la présence de
                  virus sur son site. L'utilisateur est seul responsable de
                  l'utilisation des informations accessibles via le site.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Liens Hypertextes
                </h3>
                <p className="leading-relaxed">
                  Le site archideco.com peut contenir des liens hypertextes vers
                  d'autres sites. ArchiDeco n'assume aucune responsabilité quant
                  au contenu de ces sites. L'accès à tous les autres sites
                  Internet liés à ce site se fait aux risques de l'utilisateur.
                  ArchiDeco décline toute responsabilité pour les informations
                  contenues sur ces autres sites et les éventuels dommages
                  directs ou indirects qu'ils pourraient causer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl gotham-book font-bold">
                  Modification des CGU
                </h3>
                <p className="leading-relaxed">
                  ArchiDeco se réserve le droit de modifier à tout moment les
                  présentes CGU. Les nouvelles CGU seront publiées sur le site
                  et seront applicables dès leur mise en ligne. Il est
                  recommandé à l'utilisateur de consulter régulièrement les CGU
                  afin de prendre connaissance des nouvelles dispositions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Droit Applicable
                </h3>
                <p className="leading-relaxed">
                  Les présentes CGU sont régies par la loi française. En cas de
                  litige, une solution amiable sera recherchée avant toute
                  action judiciaire. À défaut, les tribunaux français seront
                  seuls compétents. Pour toute contestation relative à
                  l'exécution ou l'interprétation des présentes conditions, seul
                  sera compétent le tribunal du siège social de ArchiDeco.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">
                  Services Interactifs
                </h3>
                <p className="leading-relaxed">
                  Le site archideco.com peut proposer des services interactifs
                  (ex : commentaires, forums). ArchiDeco se réserve le droit de
                  supprimer tout contenu qui contreviendrait aux lois et
                  règlements en vigueur ou aux bonnes mœurs. L'utilisateur
                  s'engage à respecter les règles de courtoisie et de politesse
                  lors de l'utilisation de ces services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  gotham-book font-bold">Contact</h3>
                <p className="leading-relaxed">
                  Pour toute question concernant nos CGV et CGU, veuillez
                  contacter notre service client à l'adresse
                  contact@archideco.fr. Nous nous engageons à répondre dans les
                  meilleurs délais à toute demande d'information, de
                  clarification ou de réclamation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGVCGUPage;
