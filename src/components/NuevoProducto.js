import React, { Component } from 'react';

import {connect} from 'react-redux'

import {agregarProducto} from '../accions/productosActions'


class NuevoProducto extends Component {
    
    tituloRef = React.createRef()
    precioRef = React.createRef()

    state = { 
        error: false
    }

  

    nuevoProducto = (e) => {
        e.preventDefault()

        const nombre = this.tituloRef.current.value
        const precio = this.precioRef.current.value

        if( nombre && precio) {
            this.setState({
                error:false
            })
        } else {
            this.setState({
                error:true,
                success:false
            })
            return
        }

        const producto = {
           nombre,
           precio
        }

        this.props.agregarProducto(producto)

        e.currentTarget.reset()

        this.setState({
            success:true
        })

        setTimeout(() => {
            this.props.history.push('/')
        }, 2000);


        
    }

    render() { 

        const {error,success} = this.state
        
        return (
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Agregar Nuevo Producto</h2>
                                <form onSubmit={this.nuevoProducto}>
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input ref={this.tituloRef} type="text" className="form-control" placeholder="Titulo" />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio del Producto</label>
                                        <input ref={this.precioRef} type="text" className="form-control" placeholder="Precio" />
                                    </div>
                                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                                </form>

                                {error ? (<div className="font-weight-bold alert alert-danger text-center mt-4">
                                            Todos los campos son obligatorios
                                          </div>
                                         )
                                        : ''
                                
                                }

                                {success ? <div className="font-weight-bold alert alert-success text-center mt-4">
                                            Agregado correctamente
                                          </div> : ""}

                            </div>
                        </div>
                    </div>
                </div>
          );
    }
}
 
export default connect(null,{agregarProducto}) (NuevoProducto);