import {useState} from 'react'

export function useFetch(){
    const [data, setData] = useState();

    async function setFetch(e){
        setData('Loading');
        fetch(e.target.value)
            .then(res => res.json())
            .then(ans => setData(ans))
            .catch(err =>{ 
                setData('Api is wrong or undefined error');
                console.log(err);
            });
    }

    return [data, setFetch];
}