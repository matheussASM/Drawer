import { useFetch } from "../../hooks/useFetch/useFetch";
import { Posts } from "../../types/types";
import { Task } from "../Task/Task";
import './style.css'

export const List = () => {
    const { data } = useFetch<Posts[]>("https://jsonplaceholder.typicode.com/posts");
    return (
        <>
        <div className="container-list">
            {data?.map(post => {
                return(
                <Task {...post} key={post.id}/>
                );
            })}
        </div>
        </>
    );
};