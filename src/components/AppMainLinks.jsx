const links = [
    {
        id: 1,
        src: "/img/buy-comics-digital-comics.png",
        css: "w-70 px-2",
        alt: "Digital comics",
        href: "#",
        name: "DIGITAL COMICS"
    },
    {
        id: 2,
        src: "/img/buy-comics-merchandise.png",
        css: "w-70 px-2",
        alt: "merchandise",
        href: "#",
        name: "DC MERCHANDISE"
    },
    {
        id: 3,
        src: "/img/buy-comics-subscriptions.png",
        css: "w-70 px-2",
        alt: "subsciption",
        href: "#",
        name: "SUBSCRIPTION"
    },
    {
        id: 4,
        src: "/img/buy-comics-shop-locator.png",
        css: "w-50px px-2",
        alt: "shop locator",
        href: "#",
        name: " COMIC SHOP LOCATOR"
    },
    {
        id: 5,
        src: "/img/buy-dc-power-visa.svg",
        css: "w-70 px-2",
        alt: "power visa",
        href: "#",
        name: "DC POWER VISA"
    }
];

export default function AppMainLinks() {
    return (
        <>
            <div className="bg-primary">
                <div className="container d-flex justify-content-between align-items-center py-4">
                    {links.map(({ id, css, src, alt, href, name }) => {
                        return (
                            <div key={id}>
                                <img className={css} src={src} alt={alt} />
                                <a className="link-underline link-underline-opacity-0 text-white fs-6 text" href={href}>
                                    {name}
                                </a>
                            </div>)
                    })}
                </div>
            </div >
        </>
    );
};