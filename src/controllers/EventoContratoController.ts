import { Request, Response } from "express";
import { ShowEventoServices} from "../services/ContratoEventoService/ContratoEventoService"


export default class EventoController{
    
    async show(request: Request, response: Response): Promise<Response>{
        try{
        const {id} = request.params;

        const showEvento = new ShowEventoServices();

        const evento = showEvento.execute({id});

        return response.json(evento);
    }catch(err){
        return response.status(400).json({error:err.message});
}}
    
}
export {EventoController}

