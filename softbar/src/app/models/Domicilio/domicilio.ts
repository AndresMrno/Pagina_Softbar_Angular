import { Pedido } from "./pedido";

export class Domicilio {

    id_domicilio : number;
    fecha: Date;
    hora : string;
    Estado : string;
    id_pedido_fk : Pedido;
}
