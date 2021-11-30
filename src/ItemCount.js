import React, { useState } from 'react'

function restar (contador,setContador) {
    if (contador < 1) {
        alert("No se puede descontar mas items") 
    } else {
        contador = (contador-1)
    }   
    return contador; 
}


function sumar (contador,setContador) {
    if (contador > 5) {
        alert("No hay mas stock") 
    } else {
        contador = (contador+1)
    }    
    return contador;
}

function ItemCount() {
    const [contador, setContador] = useState(1);

    return (
        <>
        <h2>Contador de Items</h2>
        <h3>{contador}</h3>
        <button onClick={() => setContador(restar)}>-</button>
        <button onClick={() => setContador(sumar)}>+</button>
        </>
    )
    }
export default ItemCount
