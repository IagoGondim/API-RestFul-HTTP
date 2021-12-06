import { getCustomRepository } from "typeorm";
import {Ponto} from "../../entities/Ponto"
import { PontosRepositories} from "../../repositories/PontoRepositories"


class ListPontoServices{

    async execute(): Promise<Ponto[]>{
        const pontoRepository = getCustomRepository(PontosRepositories);
        
        const ponto = await pontoRepository.find({relations: ["cliente", "endereco"]})
        return ponto;
    }


}

export {ListPontoServices}