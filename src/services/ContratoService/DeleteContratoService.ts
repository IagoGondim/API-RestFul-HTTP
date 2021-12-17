import { getCustomRepository } from "typeorm";
import {Contrato} from "../../entities/Contrato"
import { ContratoRepositories} from "../../repositories/ContratoRepositories"

interface IContratoRequest{
    id: string;
}
// Classe responsável por deletar um contrato específico através do uuid no banco de dados
class DeleteContratoServices{

    async execute({id}: IContratoRequest): Promise<void>{
        
        const contratosRepository = getCustomRepository(ContratoRepositories);
        
        const contrato = await contratosRepository.findOne(id);

        if(!contrato){
            
            throw new Error("Contrato não encontrado");
        }

        await contratosRepository.remove(contrato)

        
    }
    
}

export {DeleteContratoServices}