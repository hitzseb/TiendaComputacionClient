import { Sucursal } from "./sucursal";
import { Vendedor } from "./vendedor";

export interface Venta {
    id?:number;
    componentes:string;
    fecha:string;
    sucursal:Sucursal;
    vendedor:Vendedor;
    total?:number;
    lista?:string;
}
