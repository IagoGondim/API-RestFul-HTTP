import { getCustomRepository } from "typeorm";
import { EnderecosRepositories} from "../../repositories/EnderecoRepositories"

interface IEnderecoRequest{
    logradouro: string;
    bairro: string;
    numero: number;
}
class CreateEnderecoServices{
    async execute({logradouro, bairro, numero}: IEnderecoRequest){
        const enderecosRepository = getCustomRepository(EnderecosRepositories);

        const addressAlreadyExists = await enderecosRepository.findOne({
            logradouro, bairro, numero
        });
        if(addressAlreadyExists){
            throw new Error("Endereco já cadastrado");
        }
        const endereco = enderecosRepository.create({
            logradouro, bairro, numero
        })
        await enderecosRepository.save(endereco);

        return endereco;
    }


}

export {CreateEnderecoServices}