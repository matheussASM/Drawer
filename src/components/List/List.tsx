import { useFetch } from "../../hooks/useFetch/useFetch";
import { Cards, States } from "../../types/types";
import { Task } from "../Task/Task";
import './style.css'

export const List = (cardState:States["state"]) => {

    const { data } = useFetch<Cards[]>("https://jsonplaceholder.typicode.com/posts");
    
    const card:Cards[] = [{
        "id": 1,
        "title": "string",
        "hasDetail": true,
        "createdAt": "11/08/1999",
        "owner": "Matheus",
        "currentState":"upcoming"
    },
    {
        "id": 2,
        "title": "string 2 ",
        "hasDetail": true,
        "createdAt": "12/08/1999",
        "owner": "Matheus",
        "currentState":"inProgress"
    },
    {
        "id": 3,
        "title": "string 3",
        "hasDetail": false,
        "createdAt": "13/08/1999",
        "owner": "Juvenal",
        "currentState":"done"
    }]

    return (
        <>
        <div className="container-list">
            {card?.filter(map => map.currentState.includes(cardState)).map(mappedCard => {
                return(
                <Task {...mappedCard} key={mappedCard.id}/>
                );
            })}
        </div>
        </>
    );
};