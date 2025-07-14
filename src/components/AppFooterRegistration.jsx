export default function AppFooterRegistration() {
    return (
        <>
            <div className="registration">
                <div className="container py-5 d-flex justify-content-between align-items-center mx-auto">
                    <div>
                        <button type="button" className="btn btn-outline-light">SIGN-UP NOW!</button>
                    </div>
                    <div>
                        <ul className="d-flex gap-3 list-unstyled align-items-center">
                            <li className="fw-bold text-primary"><a href="#">FOLLOW US</a></li>
                            <li><a href="#"><img src="/img/footer-facebook.png" alt="facebook" /></a></li>
                            <li><a href="#"><img src="/img/footer-twitter.png" alt="twitter" /></a></li>
                            <li><a href="#"><img src="/img/footer-youtube.png" alt="youtube" /></a></li>
                            <li><a href="#"><img src="/img/footer-pinterest.png" alt="pinterest" /></a></li>
                            <li><a href="#"><img src="/img/footer-periscope.png" alt="periscope" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};