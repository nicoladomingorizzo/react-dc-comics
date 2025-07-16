import AppLogo from './AppLogo';
//import navElements from '../db/navElements';

export default function AppHeader({ navElements }) {
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
                        {
                            navElements.map(({ id, href, name }) => {
                                return (
                                    <div key={id} className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className='nav-item px-3'>
                                                <a className="link-underline link-underline-opacity-0 text-black" href={href}>
                                                    {name}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </nav>
            </header>
        </>
    );
};