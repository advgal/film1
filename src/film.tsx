import React from 'react'; // we need this to make JSX compile
import {ComponentProps, useEffect, useState} from "react";

export const Film= (props: ComponentProps<any>)=> {
    const [token, setToken] = useState<any> (null);

    useEffect (() => {
        async function getToken () {
            console.log ('vor fetch');
            const result = await fetch ("https://api.themoviedb.org/3/movie/550?api_key=d49416cd8a2e65767b5ac717906e3f63");
            console.log ('nach fetch');
            const json = await result.json ();
            setToken (json);
        }

        getToken ();
    }, []);

    const jsonString = () => {
        return JSON.stringify (token);
    }

    return (
        <h2>der Film</h2>
    {
        jsonString ()
    }
)
}
