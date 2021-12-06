import { getCustomRepository } from "typeorm";
import {Ponto} from "../../entities/Ponto"
import { PontosRepositories} from "../../repositories/PontoRepositories"

interface IPontoRequest{
    id: string;
}  

class DeletePontoServices{

    async execute({id}: IPontoRequest): Promise<void>{
        const pontosRepository = getCustomRepository(PontosRepositories);
        
        const ponto = await pontosRepository.findOne(id);

        if(!ponto){
            throw new Error("Ponto não encontrado");
        }

        await pontosRepository.remove(ponto)
        
    }


}

export {DeletePontoServices}