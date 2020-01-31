import React, { Component } from 'react';

import {connect} from 'react-redux'

import {mostrarProducto,editarProducto} from '../accions/productosActions'


class EditarProducto extends Component {
    
    tituloRef = React.createRef()
    precioRef = React.createRef()

    state = { 
        error: false
    }

    editarProducto = (e) => {
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
           precio,
           id: this.props.match.params.id
        }
        
        console.log(producto)

        this.props.editarProducto(producto)

        this.setState({
            success:true
        })

        setTimeout(() => {
            this.props.history.push('/')
        }, 2000);

        
    }

    componentDidMount() {
        
        this.props.mostrarProducto(this.props.match.params.id)
    }

    // no lo puedo poner en mount porque se carga antes que llegen los props
    
    componentWillReceiveProps(nextProps,nextState) {
        const {precio,nombre} = nextProps.productoEditar

        this.setState({
            precio,
            nombre
            })
        
    }

    render() { 

        const {error,success} = this.state
        
        return (
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Editar Producto</h2>
                                <form onSubmit={this.editarProducto}>
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input defaultValue={this.state.nombre} ref={this.tituloRef} type="text" className="form-control" placeholder="Titulo" />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio del Producto</label>
                                        <input defaultValue={this.state.precio} ref={this.precioRef} type="text" className="form-control" placeholder="Precio" />
                                    </div>
                                    <button type="submit" className="btn btn-warning font-weight-bold text-uppercase d-block w-100">EDITAR</button>
                                </form>

                                {error ? (<div className="font-weight-bold alert alert-danger text-center mt-4">
                                            Todos los campos son obligatorios
                                          </div>
                                         )
                                        : ''
                                
                                }

                                {success ? <div className="font-weight-bold alert alert-success text-center mt-4">
                                            Editado correctamente
                                          </div> : ""}

                            </div>
                        </div>
                    </div>
                </div>
          );
    }
}

//state

const mapStateToProps = state => ({
    productoEditar: state.productos.productoEditar
})
 
export default connect(mapStateToProps,{mostrarProducto,editarProducto}) (EditarProducto);