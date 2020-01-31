import {MOSTRAR_PRODUCTOS} from './types'
import {ELIMINAR_PRODUCTO} from './types'
import {AGREGAR_PRODUCTO} from './types'
import {MOSTRAR_PRODUCTO} from './types'
import {EDITAR_PRODUCTO} from './types'


import axios from 'axios'

export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get('http://localhost:5000/productos')
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}

export const borrarProducto = (id) => async dispatch => {
    await axios.delete(`http://localhost:5000/productos/${id}`)
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
    })
}

export const agregarProducto = (prod) => async dispatch => {
    const respuesta = await axios.post(`http://localhost:5000/productos`,prod)
    dispatch({
        type: AGREGAR_PRODUCTO,
        payload: respuesta.data
    })
}

export const mostrarProducto = (id) => async dispatch => {
    const respuesta = await axios.get(`http://localhost:5000/productos/${id}`)
    dispatch({
        type: MOSTRAR_PRODUCTO,
        payload: respuesta.data
    })
}

export const editarProducto = (producto) => async dispatch => {
    const respuesta = await axios.put(`http://localhost:5000/productos/${producto.id}`,producto)
    console.log(respuesta.data)
    dispatch({
        type: EDITAR_PRODUCTO,
        payload: respuesta.data
    })
}

