export default function AppFooterRegistration() {
    return (
        <>
            <div className="registration">
                <div className="container-fluid py-5 d-flex justify-content-around align-items-center mx-5">
                    <div>
                        <button type="button" class="btn btn-outline-light">SIGN-UP NOW!</button>
                    </div>
                    <div>
                        <ul className="d-flex gap-2 list-unstyled align-items-center">
                            <li className="fw-bold text-primary"><a href=""></a>FOLLOW US</li>
                            <li><img src="/img/footer-facebook.png" alt="facebook" /></li>
                            <li><img src="/img/footer-twitter.png" alt="twitter" /></li>
                            <li><img src="/img/footer-youtube.png" alt="youtube" /></li>
                            <li><img src="/img/footer-pinterest.png" alt="pinterest" /></li>
                            <li><img src="/img/footer-periscope.png" alt="periscope" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};