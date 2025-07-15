import comics from '../db/DcComics';
import AppMainLinks from './AppMainLinks';

export default function AppMain() {
    return (
        <>
            <main>
                <div id='jumbotron'></div>
                <button id='buttonSeries'>
                    current series
                </button>
                <div className='container-fluid'>
                    <div className='bg-black row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-xs-1 pt-5 pb-4 px-4'>
                        {comics.map(({ id, title, series, thumb }) => {
                            return (
                                <div key={id} className='pb-4'>
                                    <div className='card-img-top'>
                                        <img className='' src={thumb} alt={title} />
                                    </div>
                                    <div className='card-body'>
                                        <h6 className='text-white py-2'>{series}</h6>
                                    </div>
                                </div>
                            )
                        })}
                        <button id='buttonLoadMore' className='text-center mx-auto'>
                            load more
                        </button>
                    </div>
                </div>
                <AppMainLinks />
            </main>
        </>
    );
}