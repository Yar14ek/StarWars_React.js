import React, { Component,Fragment } from 'react';
import RandomPlanet from '../Random_Planet'
import ItemList from '../Iten_List'
class App extends Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <RandomPlanet/>
                <ItemList/>
            </Fragment>
         );
    }
}
 
export default App;