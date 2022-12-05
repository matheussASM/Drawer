import { Posts } from '../../types/types';
import './style.css'

export const Task = (post:Posts) => {
    return(
        <div key={post.id} className="item-container-list">
            <p>Num:{post.id}</p>
            <h3>{post.title}</h3>
            <p>Tags:SGM</p>
            <p>Date:11/08/2022</p>
            <p>Detail:Icon</p>
            <p>Owner:Matheus</p>
        </div>
    );
};