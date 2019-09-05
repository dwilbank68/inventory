import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.jsx';

// import ItemList from './ItemList.jsx';
// const ItemList = (props) => {
const ItemList = ({items, dec, inc}) => {
    // no lifecycle methods
    // no refs

    

    return (
        <div className="ItemList">
            {items.map(i => <Item   item={i} key={i.sortOrder}
                                    dec={dec} inc={inc}/>)}
        </div>
    );
};


// ItemList.defaultProps = {};
// ItemList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({
//          title: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired
//     }).isRequired,
//     comments:    PropTypes.arrayOf(PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default ItemList;