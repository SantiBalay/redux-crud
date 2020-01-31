import React, { Component } from 'react';

//router
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import {borrarProducto} from '../accions/productosActions'


class Producto extends Component {

    eliminarProducto = () => {

        const {id} = this.props.data;

        this.props.borrarProducto(id);
    }

    render() { 

        const {id,nombre,precio} = this.props.data

        return ( 
            <li className="list-group-item">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                         <p className="text-dark m-0"> {nombre}</p>
                         <span className="badge badge-info"> $ {precio}</span>
                    </div>

                    <div className="col-md-4 d-flex justify-content-end acciones">
                        <Link to={`productos/editar/${id}`} className="btn btn-primary"> Editar </Link>
                        <button type="button" className="btn btn-danger ml-2" onClick={this.eliminarProducto}> Eliminar </button>
                    </div>
                </div>
            </li>
         );
    }
}
 
export default connect(null,{borrarProducto}) (Producto);