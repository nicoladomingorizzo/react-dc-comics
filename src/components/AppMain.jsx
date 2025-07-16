import Card from './Card';
// import links from '../db/mainLinks';
import AppMainLinks from './AppMainLinks';
// import comics from '../db/dcComics';

export default function AppMain(props) {
    return (
        <>
            <main>
                <div id='jumbotron'></div>
                <button id='buttonSeries'>
                    current series
                </button>
                <div className='container-fluid'>
                    <div className='bg-black row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-xs-1 pt-5 pb-4 px-4'>
                        {props.comics.map(({ id, thumb, title, series }) => {
                            return (
                                <Card key={id} thumb={thumb} title={title} series={series} />
                            )
                        })}
                        <button id='buttonLoadMore' className='text-center mx-auto'>
                            load more
                        </button>
                    </div>
                </div>
                <div className="bg-primary">
                    <div className="container d-flex justify-content-between align-items-center py-4">
                        {props.links.map(({ id, css, src, alt, href, name }) => {
                            return <AppMainLinks key={id} css={css} src={src} alt={alt} href={href} name={name} />
                        })}
                    </div>
                </div >
            </main>
        </>
    );
}
