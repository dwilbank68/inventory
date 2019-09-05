import React, { Component } from 'react';
import ItemList from './components/ItemList.jsx';
// import PropTypes from 'prop-types';

// import App.js from './App.js.jsx';
class App extends Component {
    
    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick(e) {
    //    
    //    this.setState(prevState => {
    //        return {}
    //    })
    // }
       
    /////////// ALTERNATIVE 1 - if using create-react-app

    // and you do not need to init the state based on props
    state = {
        items: {
            "cap":{
                count: 0,
                employees: [],
                sortOrder: 1
            },
            "cap - beanie":{
                count: 0,
                employees: [],
                sortOrder: 2
            },
            "belt": { 
                count: 0,
                employees: [],
                sortOrder: 3
            }
        }  
    };
        
    decrement = (name) => {
        const updatedItems = {...this.state.items}
        const item = updatedItems[name];
        item.count = item.count - 1;
        this.setState({
            items: updatedItems
        })
    }
    increment = (name) => {
        const updatedItems = {...this.state.items}
        const item = updatedItems[name];
        item.count = item.count + 1;
        this.setState({
            items: updatedItems
        })
    }
    
    render() {
        const items = [];
        for (let key in this.state.items) {
            items.push({name:key, ...this.state.items[key]})
        }
        console.log('items',items);
        return (
            <div    className="">
                <ItemList   items={items}
                            dec={this.decrement}
                            inc={this.increment}/>
            </div>
        );
    }
}

// App.js.defaultProps = {};
// App.js.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// App.js.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default App;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')
    
// }

///////////////////////////////////// BACKGROUND IMAGE /////////////////////////////////////

// import Foo from './images/foo.png';

// style={{background:`white url(${Foo})`}}


///////////////////////////////////// REACT-REVEAL EFFECT /////////////////////////////////////

// import Fade from 'react-reveal/Fade.js';
// import Slide from 'react-reveal/Slide.js';
// import Zoom from 'react-reveal/Zoom.js';

// <Fade delay={500}>...</Fade>
// <Slide left delay={1000}>...</Slide
// <Zoom delay={foo.delay}>...</Zoom>