// import "./SeriesCard.css";

export const SeriesCard = (props) => {
    const { image, title, release_year, duration, rating, description, link } = props.data;
    
    return (
        <li className="series-card">
            <div className="series-card-image">
                <img src={image} alt={title} />
            </div>
            <h2 className="series-card-title">{title}</h2>
            <h3 className="series-card-release">Release: {release_year}</h3>
            <p className="series-card-duration">Duration: {duration}</p>
            <p className="series-card-rating">⭐ {rating}</p>
            <p className="series-card-description">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="series-card-button">Watch Now</button>
            </a>
        </li>
    );
}
