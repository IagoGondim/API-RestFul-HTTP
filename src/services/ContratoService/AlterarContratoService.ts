import { getCustomRepository } from "typeorm";
import {Contrato} from "../../entities/Contrato"
import { Evento } from "../../entities/ContratoEvento";
import { ContratoRepositories} from "../../repositories/ContratoRepositories"
import { EventoRepositories } from "../../repositories/EventoRepositories";
import {CreateContratoEventoServices} from "../ContratoEventoService/CreateContratoEventoService"

interface IContratoRequest{
    id: string;
    estado: string;

}
//Classe responsável por alterar dados de um cliente especifíco através do uuid no banco de dados
class AlterarContratoServices{

    async execute({estado, id}: IContratoRequest): Promise<Contrato>  {
        const contratoRepository = getCustomRepository(ContratoRepositories);
        const eventoRepository = getCustomRepository(EventoRepositories);
        
        const contrato = await contratoRepository.findOne(id);
        const contratoAntigo = contrato.estado
       
        if(!contrato){
            throw new Error("Contrato não encontrado");
        }
            const createContratoEvento = new CreateContratoEventoServices().execute({
                contrato_id:contrato.id,
                estado_antigo:contratoAntigo,
                estado_novo:estado
            })   
        contrato.estado = estado
        
        await contratoRepository.save(contrato);

        return contrato
    }
}

export {AlterarContratoServices}