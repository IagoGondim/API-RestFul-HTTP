import { getCustomRepository } from "typeorm";
import {Evento} from "../../entities/ContratoEvento"
import { EventoRepositories} from "../../repositories/EventoRepositories"

interface IEventoRequest{
    contrato_id: string;
}
// Classe responsável por mostrar histórico de um contrato especifíco
class ShowEventoServices{

    async execute({contrato_id}: IEventoRequest): Promise<Evento[]>{
        const eventosRepository = getCustomRepository(EventoRepositories);
        const evento = await eventosRepository.find({where:{contrato_id:contrato_id}});

        if(!evento){
            throw new Error("Evento não encontrado");
        }

        return evento;
    }


}

export {ShowEventoServices}