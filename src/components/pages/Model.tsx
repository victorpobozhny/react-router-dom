import React from 'react';
import {useParams} from "react-router-dom";

type Model = {
    model?: string
    collection?: string
    price?: string
    picture?: string
}

const Model: React.FC<Model> = (props) => {
    const params = useParams()

    return (
        <div style={{padding: '20px', color: 'whitesmoke', textDecoration: 'none'}}>
            <div>Model: {props.model || 'model'}</div>
            <div>Collection: {props.collection || `collection`}</div>
            <img src={props.picture || `no picture`} alt={props.model || 'model'} style={{maxWidth: '300px', padding: '20px'}}/>
            <div>Price: {props.price || 'no price'}</div>
        </div>
    );
};

export default Model;