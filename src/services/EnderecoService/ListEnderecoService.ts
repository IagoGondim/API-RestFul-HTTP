import { getCustomRepository } from "typeorm";
import {Endereco} from "../../entities/Endereco"
import { EnderecosRepositories} from "../../repositories/EnderecoRepositories"

// Classe resposável por listar todos os endereço do banco de dados
class ListEnderecoServices{

    async execute(): Promise<Endereco[]>{
        const enderecoRepository = getCustomRepository(EnderecosRepositories);
        
        const endereco = await enderecoRepository.find({where:{data_remocao:null}})
        return endereco;
    }


}

export {ListEnderecoServices}