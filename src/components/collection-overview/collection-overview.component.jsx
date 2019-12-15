import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'


import './collection-overview.styles.scss';

import PreviewCollection from '../../components/preview-collection-component/preview-collection-component';

const CollectionOverview = ({collections}) => (
    <div className = 'collection-overview'>
        {
            collections.map(({id, ...otherCollectionProp}) => (
                <PreviewCollection key = {id}{...otherCollectionProp}/>
            ))
        }
    </div>
);

const mapToState = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapToState)(CollectionOverview);