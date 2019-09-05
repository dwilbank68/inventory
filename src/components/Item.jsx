import React from 'react';
import PropTypes from 'prop-types';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

const styles = {
    item: {
        width: '25%',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    },
    countBox: {
        width: '50px',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    }
}
// import Item from './Item.jsx';
// const Item = (props) => {
const Item = ({item, dec, inc}) => {
    // no lifecycle methods
    // no refs

    

    return (
        <div style={styles.item}>
            <div>{item.name}</div>
            <div style={styles.countBox}>
                <div>
                    <div onClick={() => inc(item.name)}><FaChevronUp/></div>
                    <div onClick={() => dec(item.name)}><FaChevronDown/></div>
                </div>
                <div>{item.count}</div>
            </div>
        </div>
    );
};


// Item.defaultProps = {};
// Item.propTypes = {
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

export default Item;