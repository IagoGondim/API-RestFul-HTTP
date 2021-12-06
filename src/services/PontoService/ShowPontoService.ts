import { getCustomRepository } from "typeorm";
import {Ponto} from "../../entities/Ponto"
import { PontosRepositories} from "../../repositories/PontoRepositories"

interface IPontoRequest{
    id: string;
}

class ShowPontoServices{

    async execute({id}: IPontoRequest): Promise<Ponto>{
        const pontosRepository = getCustomRepository(PontosRepositories);
        
        const ponto = await pontosRepository.findOne(id);

        if(!ponto || ponto.data_remocao){
            throw new Error("Ponto não encontrado");
        }

        return ponto;
    }


}

export {ShowPontoServices}