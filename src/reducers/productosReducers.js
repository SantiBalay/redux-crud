import { MOSTRAR_PRODUCTOS,ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from '../accions/types'

// cada reducer tiene su propie state

const initialState = {
    productos: [],
    productoEditar: {}
}

export default function( state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }
        
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                productos: state.productos.filter( producto => producto.id !== action.payload)
            }

        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [state.productos,action.payload]
            }
        case MOSTRAR_PRODUCTO:
            return {
                ...state,
                productoEditar: action.payload
            }
        case EDITAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map( (producto) =>  (producto.id === action.payload.id) ? producto = action.payload : producto )
            }
    
        default:
            return state
    }
}