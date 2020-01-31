import React, { Component, Fragment } from 'react';


//Redux
import {Provider} from 'react-redux'
import store from './store'

//Components
import Header from './components/Header'
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditProducto'


//Router
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class App extends Component {
  state = {  }
  render() { 

    return (  
      <Provider store={store}>
        <Router>
          <Fragment>
              <Header/>
          </Fragment>

          <div className="container">
            <Switch>
                <Route exact path="/" component={Productos}/>
                <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                <Route exact path="/productos/editar/:id" component={EditarProducto}/>
            </Switch>
          </div>

        </Router>
      </Provider>
    );
  }
}
 
export default App;