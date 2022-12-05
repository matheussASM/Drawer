import { Cards } from '../../types/types';
import './style.css'

export const Task = (card:Cards) => {
    return(
        <div key={card.id} className="item-container-list">
            <p>{card.id}</p>
            <h3>{card.title}</h3>
            <p>{card.createdAt}</p>
            <p>{card.hasDetail? "Icon": ""}</p>
            <p>{card.owner}</p>
        </div>
    );
};