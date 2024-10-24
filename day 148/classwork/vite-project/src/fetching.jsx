import { useState } from "react";

function Fetch() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    function getFetch(link) {
        fetch(link)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data.Search || []);
            })
            .catch((err) => {
                setError(err); 
            });
    }

    return (
        <>
            <input
                type='text'
                placeholder="your film"
                onChange={e => getFetch(`http://www.omdbapi.yutuy/?s=${e.target.value}&apikey=92b6082f`)}
            />
            {error && <p>{error.message}</p>}
            <div>
                {data.map((val, index) => (
                    <section key={index}>
                        <p>{JSON.stringify(val)}</p>
                    </section>
                ))}
            </div>
        </>
    );
}

export default Fetch;