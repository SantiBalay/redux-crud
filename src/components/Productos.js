import React, { Component, Fragment } from 'react';

//redux
import { connect } from 'react-redux'
import { mostrarProductos} from '../accions/productosActions'

//components
import Producto from './Producto'

class Productos extends Component {


    componentDidMount() {
        this.props.mostrarProductos();
    }


    render() { 

        const {productos} = this.props

        return (
            <Fragment>
                <h2 className="my-5 text-center"> Listado </h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul>
                            {productos.map( producto => (
                                <Producto
                                    key={producto.id}
                                    data={producto}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </Fragment>
          );
    }
}

//state
const mapStateToProps = state => ({
    productos: state.productos.productos
})
 
export default connect(mapStateToProps, {mostrarProductos}) (Productos);