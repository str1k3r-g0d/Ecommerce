import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectShopItems} from '../../redux/shop/shop.selectors'
import PreviewCollection from '../../components/preview-collection-component/preview-collection-component';

const ShopPage = ({collections}) => (
    <div className = 'shop-page'>
        {
            collections.map(({id, ...otherCollectionProp}) => (
                <PreviewCollection key = {id}{...otherCollectionProp}/>
            ))
        }
    </div>
);

const mapToState = createStructuredSelector({
    collections: selectShopItems
});
           
export default connect(mapToState)(ShopPage);