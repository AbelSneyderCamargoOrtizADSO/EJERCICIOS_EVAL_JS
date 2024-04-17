import { regexAmericanExpress,regexDinersClub,regexDiscover,regexMastercard,regexVisa } from "./ejercicio1.js";

export function validarTarjeta(){
    while (true) {
        let tarjeta = prompt("INGRESE EL NUMERO DE SU TARJETA DE CREDITO")

        if (!/^\d+$/.test(tarjeta)) {
            alert("ERROR: SOLO SE PERMITE INGRESAR ENTEROS POSITIVOS") 
        } else if(tarjeta.length > 16){
            alert("ERROR: INGRESE MAXIMO 16 CARACTERES") 
        } else{
            if (regexAmericanExpress.test(tarjeta)) {
                return "LA TARJETA ES DE TIPO American Express"
            } else if (regexDinersClub.test(tarjeta)) {
                return "LA TARJETA ES DE TIPO Diners Club"
            } else if (regexDiscover.test(tarjeta)) {
                return "LA TARJETA ES DE TIPO Discover"
            } else if (regexMastercard.test(tarjeta)) {
                return "LA TARJETA ES DE TIPO Mastercard"
            } else if (regexVisa.test(tarjeta)) {
                return "LA TARJETA ES DE TIPO Visa"
            } else{
                alert("NUMERO DE TARJETA DESCONOCIDO") 
            }
        }
    }
}

