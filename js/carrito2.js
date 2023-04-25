const productos=[
    {nombre: "Queso untable", precio: 50},
    {nombre: "Cerveza", precio: 100},
    {nombre: "Leche", precio: 150},
    {nombre: "Deshodorante", precio: 200},
    {nombre: "Coca-Cola", precio: 250},
    {nombre: "Carne", precio: 300},
]

let carritoCompras=[]

let seleccion = prompt("hola desea realizar una compra:")

while(seleccion != "si" && seleccion != "no"){
    alert("Por Favor ingresa una respuesta correcta: si o no")
    seleccion = prompt("hola desea realizar una compra:")
}


if (seleccion == "si"){
    alert("Redireccionando al catalogo de productos. ");
    let catalogo = productos.map((productos)=> '\n'+ productos.nombre +" "+ "$"+ productos.precio + '\n');
    alert("Catalogo"+"\n"+ catalogo.join(""))

    while(seleccion != "no"){
        let producto = prompt("Agregar un producto al carrito"+ "\n")
        let precio = 0
    
        if (producto =="Queso untable"||producto =="Cerveza"||producto =="Leche"||producto =="Deshodorante"||producto =="Coca-Cola"||producto =="Carne" ){
            switch(producto){
                case "Queso untable":
                    precio =50;
                    break;
                case "Cerveza":
                    precio =100;
                    break;
                case "Leche":
                    precio =150;
                    break;
                case "Deshodorante":
                    precio =200;
                    break;
                case "Coca-Cola":
                    precio =250;
                    break;
                case "Carne" :
                    precio =300;
                    break;
                default:
                    break;
            }
        let unidades = Number(prompt("Seleccione el nùmero de unidades:"))
        carritoCompras.push({producto,unidades,precio})
        console.log(carritoCompras)
        }else{
            alert("Ese producto no se encuentra en nuestro catalogo")
        }

    seleccion= prompt("Desea continuar añadiendo productos al carrito?")


    while(seleccion =="no"){
        alert ("Gracias por su compra")
        carritoCompras.forEach((cuenta) => {
            console.log(`producto: ${cuenta.producto}, unidades ${cuenta.unidades}, valor unitario ${cuenta.unidades * cuenta.precio}`)
        })
    break;
    }
}

let TOTAL= carritoCompras.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
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


  const envio = () => {
    if (TOTAL <= 0 ) {
      alert("Usted no sumo nada al carrito. Por lo cual no hay gastos de envio")
    }else if (TOTAL > 5000){
      alert("Al ser tu compra mayor a $5.000. El envio es GRATIS!!. ")
    }else {
      alert("Tu compra es inferior a $5.000. Por lo tanto, se te cobrara un recargo de $500 en la entrega. ")
    }
}

envio()


}else if (seleccion == "no"){
    alert("Gracias por su visita")
}







