import links from "../db/mainLinks";

export default function AppMainLinks(props) {
    return (
        <div>
            <img className={props.css} src={props.src} alt={props.alt} />
            <a className="link-underline link-underline-opacity-0 text-white fs-6 text" href={props.href}>
                {props.name}
            </a>
        </div>
    );
};