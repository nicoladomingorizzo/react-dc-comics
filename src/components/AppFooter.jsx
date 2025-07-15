import AppFooterRegistration from "./AppFooterRegistration";
import dcComics from "../db/dcComicsLinks";
import shop from "../db/shopLinks";
import dc from "../db/dcLinks"
import sites from "../db/sitesLinks";

export default function AppFooter() {
    return (
        <>
            <footer className="bg-black">
                <div className="container d-flex justify-content-start gap-5">
                    <div className="py-4">
                        <h4 className="py-1 text-white">DC COMICS</h4>

                        <ul className="list-unstyled">
                            {dcComics.map(({ id, href, name }) => {
                                return (
                                    <li key={id} ><a href={href}>{name}</a></li>
                                )
                            })}
                        </ul>
                        <h4 className="py-1 text-white">SHOP</h4>
                        <ul className="list-unstyled">
                            {shop.map(({ id, href, name }) => {
                                return (

                                    <li key={id}><a href={href}>{name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="py-4">
                        <h4 className="py-1 text-white">DC</h4>
                        <ul className="list-unstyled">
                            {dc.map(({ id, href, name }) => {
                                return (
                                    <li key={id}><a href={href}>{name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="py-4">
                        <h4 className="py-1 text-white">SITES</h4>
                        <ul className="list-unstyled">
                            {sites.map(({ id, href, name }) => {
                                return (
                                    <li key={id}><a href={href}>{name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <img id="logoFooter" src="/img/dc-logo-bg.png" alt="" />
                    </div>
                </div>
            </footer>
            <AppFooterRegistration />
        </>
    );
};