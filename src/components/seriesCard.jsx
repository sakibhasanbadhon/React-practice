export const SeriesCard = (props) => {
    const { image,title,release_year,duration,rating,description,link } = props.data;
  return (
    <li>
        <div>
            <img src = {image} alt = "Profile" />
        </div>
        <h2>Name      : {title}</h2>
        <h3>Release   : {release_year}</h3>
        <p>Duration   : {duration}</p>
        <p>Rating     : {rating}</p>
        <p>Description: {description}</p>
        <a href = {link} target = "_blank">
            <button>Watch Now</button>
        </a>

    </li>
  );
}