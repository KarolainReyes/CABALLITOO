const fila = document.getElementById("fila");
const columna = document.getElementById("columna");
let movimientos = [];

function movimientosPosibles(fila, columna){
    let movimiento1 = String(`${fila-2},${columna-1}`);
    if (fila-2>=1 && columna-1>=1){
        movimientos.push(movimiento1);
    }
    let movimiento2 = String(`${fila-2},${columna+1}`);
    if (fila-2>=1 && columna+1<=8){
        movimientos.push(movimiento2);
    }
    let movimiento3 = String(`${fila+2},${columna-1}`);
    if (fila+2<=8 && columna-1>=1){
        movimientos.push(movimiento3);
    }
    let movimiento4 = String(`${fila+2},${columna+1}`);
    if (fila+2<=8 && columna+1<=8){
        movimientos.push(movimiento4);
    }
    let movimientoY1 = String(`${fila-1},${columna-2}`);
    if (columna-2>=1 && fila-1>=1){
        movimientos.push(movimientoY1);
    }
    let movimientoY2 = String(`${fila+1},${columna-2}`);
    if (columna-2>=1 && fila+1<=8){
        movimientos.push(movimientoY2);
    }
    let movimientoY3 = String(`${fila-1},${columna+2}`);
    if (columna+2<=8 && fila-1>=1){
        movimientos.push(movimientoY3);
    }
    let movimientoY4 = String(`${fila+1},${columna+2}`);
    if (columna+2<=8 && fila+1<=8){
        movimientos.push(movimientoY4);
    }
}

