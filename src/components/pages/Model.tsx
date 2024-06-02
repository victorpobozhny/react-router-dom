import React from 'react';
import {useParams} from "react-router-dom";

type Model = {
    model: string
    collection: string
    price: string
    picture: string
}

const Model: React.FC<Model> = (props) => {
    const params =  useParams()

    return (
        <div style={{padding: '20px', color: 'whitesmoke', textDecoration: 'none'}}>
            <div>Model: {props.model}</div>
            <div>Collection: {props.collection}</div>
            <img src={props.picture} alt={props.model} style={{maxWidth: '300px', padding: '20px'}}/>
            <div>Price: {props.price}</div>
        </div>
    );
};

export default Model;