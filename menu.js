/**
 * 
 * cuando el cliente seleccione un pedido entonces deberia mpostrarse el mismo en la pagina
 * 
 * si el clioente vuelve a seleccionar otro pedido entonces este reemplaza al anterior
 * 
 * 
 * mandarOrden(id):
 * recibe id del boton usado para la orden y dependiendo del id se muestra el pedido correspondiente
 */


const ORDEN_PIZZA = 1;
const ORDEN_MILANESA = 2;
const ORDEN_CAFE = 3;


function mandarOrden(id) {

    //===
    switch (Number(id)) {
        case ORDEN_PIZZA:
            //codigo
            document.querySelector('#ordenPedida').innerHTML =
                "<h2> orden de pizza</h2>"

            break;
        case ORDEN_MILANESA:
            //codigo
            document.querySelector('#ordenPedida').innerHTML =
                "<h2>orden de milanesa</h2>"
            break;
        case ORDEN_CAFE:
            //codigo
            document.querySelector('#ordenPedida').innerHTML =
                "<h2> orden de cafe </h2>"
            break;

        default:

    }
}