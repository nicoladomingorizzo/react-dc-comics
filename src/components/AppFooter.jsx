import AppFooterRegistration from "./AppFooterRegistration";

export default function AppFooter() {
    return (
        <>
            <footer className="bg-black">
                <div className="container d-flex justify-content-start gap-5">
                    <div className="py-4">
                        <ul className="list-unstyled">
                            <li className="fw-bold fs-5 py-1"><a href="#">DC COMICS</a></li>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                        <ul className="list-unstyled">
                            <li className="fw-bold fs-5 py-1"><a href="#">SHOP</a></li>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div className="py-4">
                        <ul className="list-unstyled">
                            <li className="fw-bold fs-5 py-1"><a href="#">DC</a></li>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy (New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="py-4">
                        <ul className="list-unstyled">
                            <li className="fw-bold fs-5 py-1"><a href="#">SITES</a></li>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
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