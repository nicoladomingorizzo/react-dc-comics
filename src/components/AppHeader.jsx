import AppLogo from './AppLogo';

export default function AppHeader() {
    return (
        <>
            <header className='bg-white d-flex justify-content-around align-items-center'>
                <AppLogo />
                <nav className="navbar navbar-expand-lg bg-white text-white d-inline-block mx-5">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">CHARACTERS</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">COMICS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">MOVIES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">TV</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">GAMES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">COLLECTIBLES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">VIDEOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FANS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">NEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SHOP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};