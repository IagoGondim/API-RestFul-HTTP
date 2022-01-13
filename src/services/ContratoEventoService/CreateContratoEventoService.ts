import { getCustomRepository } from "typeorm";
import { EventoRepositories} from "../../repositories/EventoRepositories"

interface IContratoEventoRequest{
    contrato_id: string;
    estado_antigo: string;
    estado_novo: string;
}
// Classe responsável por criar um evento no banco de dados
class CreateContratoEventoServices{
    static save: any;
    static execute(arg0: { id: any; }) {
        throw new Error("Method not implemented.");
    }
    async execute({contrato_id, estado_antigo,estado_novo}: IContratoEventoRequest){
        const eventoRepository = getCustomRepository(EventoRepositories);

        const evento = eventoRepository.create({
            contrato_id:contrato_id,
            estado_anterior:estado_antigo,
            estado_posterior:estado_novo,
        })
        await eventoRepository.save(evento);

        return evento;
    }
}
export {CreateContratoEventoServices}