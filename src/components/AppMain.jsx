import AppMainLinks from './AppMainLinks'

export default function AppMain() {
    return (
        <>
            <main className='bg-black'>
                <div className="align-middle container text-start text-white fs-1 py-5">
                    -- Content here --
                </div>
                <AppMainLinks />
            </main>
        </>
    );
}