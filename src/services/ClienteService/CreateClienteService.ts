import { getCustomRepository } from "typeorm";
import { ClientesRepositories} from "../../repositories/ClientesRepositories"

interface IClienteRequest{
    nome: string;
    tipo: string;
}

class CreateClienteServices{
    async execute({nome, tipo}: IClienteRequest){
        const clientesRepository = getCustomRepository(ClientesRepositories);

        const userAlreadyExists = await clientesRepository.findOne({
            nome
        });
        if(userAlreadyExists){
            throw new Error("Cliente já cadastrado");
        }
        const cliente = clientesRepository.create({
            nome, tipo
        })
        await clientesRepository.save(cliente);

        return cliente;
    }


}

export {CreateClienteServices}