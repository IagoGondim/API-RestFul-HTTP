import { getCustomRepository } from "typeorm";
import {Endereco} from "../../entities/Endereco"
import { EnderecosRepositories} from "../../repositories/EnderecoRepositories"

interface IEnderecoRequest{
    id: string;
}  
//Classe resposável por deletar dados de um endereço especifíco através do uuid no banco de dados
class DeleteEnderecoServices{

    async execute({id}: IEnderecoRequest): Promise<void>{
        
        const enderecosRepository = getCustomRepository(EnderecosRepositories);
        
        const endereco = await enderecosRepository.findOne(id);

        if(!endereco){
            throw new Error("Endereco não encontrado");
        }

        endereco.data_remocao = new Date(Date.now())

        await enderecosRepository.remove(endereco)
        
    }


}

export {DeleteEnderecoServices}