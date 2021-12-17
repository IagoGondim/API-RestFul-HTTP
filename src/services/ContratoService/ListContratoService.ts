import { getCustomRepository } from "typeorm";
import {Contrato} from "../../entities/Contrato"
import { ContratoRepositories} from "../../repositories/ContratoRepositories"

// Classe responsável por listar os contratos armazenados no banco de dados
class ListContratoServices{

    async execute(): Promise<Contrato[]>{
        const contratosRepository = getCustomRepository(ContratoRepositories);
        
        const contrato = await contratosRepository.find()
        return contrato;
    }


}

export {ListContratoServices}