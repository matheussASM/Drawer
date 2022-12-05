import { useEffect, useState } from "react";

export function useFetch<T = unknown> (url:string, init?:RequestInit){
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {   
        fetch(url, init)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => {setError(err)})
        .finally(() => {setIsLoading(false)})
    }, []);

    return { data, isLoading, error};
};