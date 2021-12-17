import { getCustomRepository } from "typeorm";
import {Contrato} from "../../entities/Contrato"
import { ContratoRepositories} from "../../repositories/ContratoRepositories"

interface IContratoRequest{
    id: string;
}
// Classe responsável por mostrar um contrato específico através do uuid no banco de dados
class ShowContratoServices{

    async execute({id}: IContratoRequest): Promise<Contrato>{
        const contratosRepository = getCustomRepository(ContratoRepositories);
        
        const contrato = await contratosRepository.findOne(id);

        if(!contrato){
            throw new Error("Contrato não encontrado");
        }

        return contrato;
    }


}

export {ShowContratoServices}