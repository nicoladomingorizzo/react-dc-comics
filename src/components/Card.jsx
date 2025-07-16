import comics from '../db/dcComics';

export default function Card(props) {
    return (
        <div className='pb-4'>
            <div className='card-img-top'>
                <img className='' src={props.thumb} alt={props.title} />
            </div>
            <div className='card-body'>
                <h6 className='text-white py-2'>{props.series}</h6>
            </div>
        </div>
    );
};