import { getCustomRepository } from "typeorm";
import {Cliente} from "../../entities/Cliente"
import { ClientesRepositories} from "../../repositories/ClientesRepositories"

interface IClientRequest{
    id: string;
}

class DeleteClienteServices{

    async execute({id}: IClientRequest): Promise<void>{
        
        const clientesRepository = getCustomRepository(ClientesRepositories);
        
        const cliente = await clientesRepository.findOne(id);

        if(!cliente){
            throw new Error("Cliente não encontrado");
        }

        cliente.data_remocao = new Date(Date.now());

        await clientesRepository.save(cliente);
    }
    
}

export {DeleteClienteServices}