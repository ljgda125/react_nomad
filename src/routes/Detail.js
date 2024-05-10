import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

        console.log(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Detail</h1>
}

export default Detail;