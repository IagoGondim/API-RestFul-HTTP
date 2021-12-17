import { getCustomRepository } from "typeorm";
import {Evento} from "../../entities/ContratoEvento"
import { EventoRepositories} from "../../repositories/EventoRepositories"

interface IEventoRequest{
    id: string;
}
// Classe responsável por mostrar histórico de um contrato especifíco
class ShowEventoServices{

    async execute({id}: IEventoRequest): Promise<Evento>{
        const eventosRepository = getCustomRepository(EventoRepositories);
        
        const evento = await eventosRepository.findOne(id);

        if(!evento){
            throw new Error("Evento não encontrado");
        }

        return evento;
    }


}

export {ShowEventoServices}