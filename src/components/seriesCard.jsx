// import "./SeriesCard.css";

export const SeriesCard = (props) => {
    const { image, title, release_year, duration, rating, description, link } = props.data;
    
    return (
        <li className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt={title} style={{ height: "150px", objectFit: "cover" }} />
            <div className="card-body p-2">
                <h6 className="card-title mb-1">{title}</h6>
                <h6 className="card-title mb-1">{description}</h6>
                <p className="card-text text-muted mb-1"><small>Release: {release_year}</small></p>
                <p className="card-text mb-1"><small>Duration: {duration}</small></p>
                <p className="card-text mb-1"><small>⭐ {rating}</small></p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary w-100">
                    Watch Now
                </a>
            </div>
        </li>


    );
}
