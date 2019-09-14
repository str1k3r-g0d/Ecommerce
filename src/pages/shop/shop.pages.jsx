import React, { Component } from 'react';
import ShopData from './shopdata';
import PreviewCollection from '../../components/preview-collection-component/preview-collection-component';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        };
    }
    render() {
        const { collections } = this.state;
        return(
            <div className = 'shop-page'>
                {
                    collections.map(({id, ...otherCollectionProp}) => (
                        <PreviewCollection key = {id}{...otherCollectionProp}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;