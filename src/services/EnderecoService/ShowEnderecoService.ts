import { getCustomRepository } from "typeorm";
import {Endereco} from "../../entities/Endereco"
import { EnderecosRepositories} from "../../repositories/EnderecoRepositories"

interface IEnderecoRequest{
    id: string;
}  
//Classe resposável por mostrar dados de um endereço especifíco através do uuid no banco de dados
class ShowEnderecoServices{

    async execute({id}: IEnderecoRequest): Promise<Endereco>{
        const enderecosRepository = getCustomRepository(EnderecosRepositories);
        
        const endereco = await enderecosRepository.findOne(id);

        if(!endereco || endereco.data_remocao){
            throw new Error("Endereco não encontrado");
        }

        return endereco;
        
    }


}

export {ShowEnderecoServices}