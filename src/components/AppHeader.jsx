import AppLogo from './AppLogo';

const navElements = [
    {
        id: 1,
        href: '#',
        name: 'COMICS'
    },
    {
        id: 2,
        href: '#',
        name: 'MOVIES'
    },
    {
        id: 3,
        href: '#',
        name: 'TV'
    },
    {
        id: 4,
        href: '#',
        name: 'GAMES'
    },
    {
        id: 5,
        href: '#',
        name: 'COLLECTIBLES'
    },
    {
        id: 6,
        href: '#',
        name: 'VIDEOS'
    },
    {
        id: 7,
        href: '#',
        name: 'FANS'
    },
    {
        id: 8,
        href: '#',
        name: 'NEWS'
    },
    {
        id: 9,
        href: '#',
        name: 'SHOP'
    },
]
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
                        {navElements.map(({ id, href, name }) => {
                            return (
                                <div key={id} className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className='nav-item px-1'>
                                            <a className="link-underline link-underline-opacity-0 text-black" href={href}>
                                                {name}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </nav>
            </header>
        </>
    );
};