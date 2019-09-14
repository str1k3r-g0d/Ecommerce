import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className = 'collection-item'>
        <div className = 'image'
            style = {{backgroundImage: `url(${imageUrl})`
            }}
        />
        <span classNAme = 'name'>{ name }</span>
        <span classNAme = 'price'>{ price }</span>   
    </div>
)

export default CollectionItem;