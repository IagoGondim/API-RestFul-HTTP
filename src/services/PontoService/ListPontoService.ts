import { getCustomRepository } from "typeorm";
import {Ponto} from "../../entities/Ponto"
import { PontosRepositories} from "../../repositories/PontoRepositories"

//Classe resposável por listar todos os pontos do banco de dados
class ListPontoServices{

    async execute(): Promise<Ponto[]>{
        const pontoRepository = getCustomRepository(PontosRepositories);
        
        const ponto = await pontoRepository.find({where:{data_remocao:null},relations: ["cliente", "endereco"]})
        return ponto;
    }


}

export {ListPontoServices}