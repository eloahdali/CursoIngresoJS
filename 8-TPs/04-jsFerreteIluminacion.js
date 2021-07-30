/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
//SOLAMENTE IF
function CalcularPrecio () 
{
    var cantidadIngresada;
    cantidadIngresada = txtIdCantidad.value;
    cantidadIngresada = parseInt (cantidadIngresada);

    var marcaElegida;
    marcaElegida = Marca.value;

    var precioLampara;
    precioLampara = 35;

    var precioConDescuento;
    precioConDescuento = precioLampara - precioLampara * (descuentoAplicado / 100);

    var importeFinal;
    importeFinal = precioConDescuento * cantidadIngresada;

    var descuentoAplicado;
    var impuestoPago;

    if (cantidadIngresada > 5)
    {
        descuentoAplicado = 50;
    }

    else
        {
            if (cantidadIngresada == 5 && marcaElegida == "ArgentinaLuz")
            {
                descuentoAplicado = 40;
            }

            else
            {
                descuentoAplicado = 30;
            }


            if (cantidadIngresada == 4 && marcaElegida == "ArgentinaLuz" || marcaElegida == "FelipeLamparas")
            {
                descuentoAplicado = 25;
            }

            else (cantidadIngresada == 4 && != "ArgentinaLuz" )
        }












/* IF Y SWITCH
function CalcularPrecio () 
{
    var cantidadIngresada;
    cantidadIngresada = txtIdCantidad.value;
    cantidadIngresada = parseInt (cantidadIngresada);

    var marcaElegida;
    marcaElegida = Marca.value;

    var precioLampara;
    precioLampara = 35;

    var precioConDescuento;
    precioConDescuento = precioLampara - precioLampara * (descuentoAplicado / 100);

    var importeFinal;
    importeFinal = precioConDescuento * cantidadIngresada;

    var descuentoAplicado;
    var impuestoPago;

    switch (cantidadIngresada)
    {
        case 1:
        case 2:
            descuentoAplicado = 0;
        break;

        case 3:
            if (marcaElegida == "ArgentinaLuz")
            {
                descuentoAplicado = 15;
            }

            else if (marcaElegida == "FelipeLamparas")
            {
                descuentoAplicado = 10;
            }

            else
            {
                descuentoAplicado = 5;
            }
        break;

        case 4:
            if (marcaElegida == "ArgentinaLuz" || marcaElegida == "FelipeLamparas")
            {
                descuentoAplicado = 25;
            }

            else
            {
                descuentoAplicado = 20;
            }
        break;

        case 5:
            if (marcaElegida == "ArgentinaLuz")
            {
                descuentoAplicado = 40;
            }

            else
            {
                descuentoAplicado = 30;
            }
        break;

        default:
            descuentoAplicado = 50;
        break;

    }

    document.getElementById ("txtIdprecioDescuento").value = precioConDescuento;

    if (importeFinal > 120)
    {
        impuestoPago = importeFinal * (10 / 100);
        importeFinal += impuestoPago;

        alert ("Total: $" + (importeFinal) + ". Usted pagó $" + (impuestoPago) + " de Ingresos Brutos");
    }

    else
    {
        alert ("Total: $" + (importeFinal) + ".");
    }

}*/