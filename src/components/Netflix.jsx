import netflixData from "../Api/netflixData.json";
import { SeriesCard } from "./seriesCard";
const Netflix = () => {
    return (
        <ul>
            {netflixData.map((curElem)=> {
               return <SeriesCard key={curElem.id} data={curElem} />;
            })}
        </ul>
    );
  };
  
  export default Netflix;
  