import { getCustomRepository } from "typeorm";
import {Evento} from "../../entities/ContratoEvento"
import { EventosRepositories} from "../../repositories/ContratoEventoRepositories"

interface IEventoRequest{
    id: string;
}

class ShowEventoServices{

    async execute({id}: IEventoRequest): Promise<Evento>{
        const eventosRepository = getCustomRepository(EventosRepositories);
        
        const evento = await eventosRepository.findOne(id);

        if(!evento){
            throw new Error("Evento não encontrado");
        }

        return evento;
    }


}

export {ShowEventoServices}