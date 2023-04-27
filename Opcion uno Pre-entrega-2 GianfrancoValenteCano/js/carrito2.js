const productos=[
    {id: 1, nombre: "queso untable", precio: 650},
    {id: 2, nombre: "cerveza pack x6", precio: 2000},
    {id: 3, nombre: "leche", precio: 400},
    {id: 4, nombre: "deshodorante", precio: 600},
    {id: 5, nombre: "coca-cola 2.25", precio: 650},
    {id: 6, nombre: "carne x Kg", precio: 1500},
    {id: 7, nombre: "fideos", precio: 700},
]


let carritoCompras=[];
let seleccion = prompt("Bienvenidos!!, desea realizar una compra?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por Favor ingresa una respuesta correcta: si o no")
    seleccion = prompt("hola desea realizar una compra:")
}

if(seleccion === "si"){
    mostrarProductos();
}else if (seleccion == "no"){
    alert("Gracias por su visita. Vuelva pronto!!")
}



function mostrarProductos(){
    alert("Redireccionando al catalogo de productos:");
        let catalogo = productos.map((productos)=> '\n'+productos.id + ")." + productos.nombre +" "+ "$"+ productos.precio + '\n');
        alert("Catalogo: "+"\n"+ catalogo.join(""))


        let producto = Number(prompt("Seleccione el producto deseado (solo en Números)"))

        const prodElegido =productos.find((produc) => produc.id === producto );

        if (prodElegido === undefined){
            alert("El producto seleccionado no existe. Vuelva a intentarlo.");
            mostrarProductos();
        }
        let unidades = Number(prompt("seleccione el nùmero de unidades:"))

        const prodAlCarrito ={
            id: prodElegido.id,
            nombre: prodElegido.nombre,
            precio: prodElegido.precio,
            cantidad: unidades,
        }

        carritoCompras.push(prodAlCarrito);
        console.log(carritoCompras); 
        
        let continuar_agregando = prompt("Desea continuar añadiendo productos al carrito?")

        while(continuar_agregando != "si" && continuar_agregando != "no"){
            alert("Por Favor ingresa una respuesta correcta: si o no")
            continuar_agregando = prompt("Desea continuar añadiendo productos al carrito?")
        }

        if (continuar_agregando === "si"){
            mostrarProductos()
        }else if(continuar_agregando === "no"){
            alert ("Gracias por su compra")
            carritoCompras.forEach((prodAlCarrito) => {
                console.log(`producto: ${prodAlCarrito.nombre}, unidades ${prodAlCarrito.cantidad}, valor unitario ${prodAlCarrito.cantidad * prodAlCarrito.precio}`)
            })
            envio()
            totalFinal()
        }
} 




function totalFinal (){
    let TOTAL= carritoCompras.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)
        console.log(`El total de tu compra es:${TOTAL}`)
        let Pago_TC_TD = prompt("Ingrese el metodo de pago, Tarjeta de Credito(se le sumara un interes del 21%(TC) o Tarjeta de Debito(se le hara un descuento de 100$(TD))." )
        if (Pago_TC_TD == "Tarjeta de Credito"||Pago_TC_TD == "TC") {
            TOTAL;
            let tc_iva= TOTAL + (TOTAL *= 0.21)
            console.log("El 21% del total de la compra es de: " + TOTAL);
            console.log("El total de la compra con 21% incluido es: " + tc_iva);
        }else if ( Pago_TC_TD == "Tarjeta de Debito"||Pago_TC_TD == "TD") {
            TOTAL -= 100
            console.log("Tenes un descuento de $100, el total es: " + TOTAL)
            console.log("El total de la compra es de: " + TOTAL) 
        }
}

function envio(){
    let TOTAL= carritoCompras.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)
    if (TOTAL <= 0 ) {
        alert("Usted no sumo nada al carrito. Por lo cual no hay gastos de envio");
        console.log("Usted no sumo nada al carrito. Por lo cual no hay gastos de envio")
    }else if (TOTAL > 5000){
        alert("Al ser tu compra mayor a $5.000. El envio es GRATIS!!. ")
        console.log("Al ser tu compra mayor a $5.000. El envio es GRATIS!!. ")
    }else {
        alert("Tu compra es inferior a $5.000. Por lo tanto, se te cobrara un recargo de $500 en la entrega. ")
        console.log("Tu compra es inferior a $5.000. Por lo tanto, se te cobrara un recargo de $500 en la entrega. ")
    }
}


