import netflixData from "../Api/netflixData.json";
const Netflix = () => {
    return (
        <ul>
            {netflixData.map((curElem)=> {
                return (
                    <li key={curElem.id}>
                        <div>
                            <img src = {curElem.image} alt = "Profile" />
                        </div>
                        <h2>Name      : {curElem.title}</h2>
                        <h3>Release   : {curElem.release_year}</h3>
                        <p>Duration   : {curElem.duration}</p>
                        <p>Rating     : {curElem.rating}</p>
                        <p>Description: {curElem.description}</p>
                        <a href = {curElem.link} target = "_blank">
                            <button>Watch Now</button>
                        </a>
                
                    </li>
                );
            })}
        </ul>
    );
  };
  
  export default Netflix;
  