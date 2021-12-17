import { Request, Response } from "express";
import { Any } from "typeorm";
import { CreateContratoEventoServices } from "../services/ContratoEventoService/CreateContratoEventoService";
import { ShowEventoServices} from "../services/ContratoEventoService/ShowContratoEventoService"
// Controller evento responsável pelos métodos de mostrar
export default class EventoController{
    
    async show(request: Request, response: Response): Promise<Response>{
        try{
        const {id} = request.params;

        const showEvento = new ShowEventoServices();

        const evento = await showEvento.execute({id});

        return response.json(evento);
    }catch(err){
        return response.status(400).json({error:err.message});
}}
}
export {EventoController}

