export default function Card({ img_src, description, git_link,concepts }) {
    return (
        <a href={git_link} target="_blank" rel="noopener noreferrer">
            <img src={img_src} alt={description} />
            <p>{description}</p>
            <p style={{"color":"#696773"}}><a>Technologies: </a>{concepts}</p>
        </a>
    );
}