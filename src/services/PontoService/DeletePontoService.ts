import { getCustomRepository } from "typeorm";
import {Ponto} from "../../entities/Ponto"
import { ContratoRepositories } from "../../repositories/ContratoRepositories";
import { PontosRepositories} from "../../repositories/PontoRepositories"

interface IPontoRequest{
    id: string;
}  
interface IContratoRequest{
    estado: string;
}
//Classe responsável por deletar um ponto especifíco através do uuid no banco de dados
class DeletePontoServices{

    async execute({id}: IPontoRequest): Promise<Ponto>{
        const pontosRepository = getCustomRepository(PontosRepositories);
        
        const ponto = await pontosRepository.findOne(id,{relations:["contrato"]});

        if(!ponto){
            throw new Error("Ponto não encontrado");
        }

        ponto.data_remocao = new Date(Date.now());

        return ponto
        
    }


}

export {DeletePontoServices}