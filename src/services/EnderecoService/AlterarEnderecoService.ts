import { getCustomRepository } from "typeorm";
import {Endereco} from "../../entities/Endereco"
import { EnderecosRepositories} from "../../repositories/EnderecoRepositories"

interface IEnderecoRequest{
    logradouro: string;
    bairro: string;
    numero: number;
}

class AlterarEnderecoServices{

    async execute({logradouro, bairro, numero}: IEnderecoRequest): Promise<Endereco | undefined>{
        const EnderecosRepository = getCustomRepository(EnderecosRepositories);
        
        const endereco = await EnderecosRepository.findOne();


        endereco.logradouro = logradouro;
        endereco.bairro = bairro;
        endereco.numero = numero;

        await EnderecosRepository.save(endereco);


        return endereco;
    }


}

export {AlterarEnderecoServices}