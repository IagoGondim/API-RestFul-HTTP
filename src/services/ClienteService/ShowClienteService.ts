import { getCustomRepository } from "typeorm";
import {Cliente} from "../../entities/Cliente"
import { ClientesRepositories} from "../../repositories/ClientesRepositories"

interface IClientRequest{
    id: string;
}
//Classe resposável por mostrar um cliente especifíco através do uuid no banco de dados
class ShowClienteServices{

    async execute({id}: IClientRequest): Promise<Cliente>{
        
        const clientesRepository = getCustomRepository(ClientesRepositories);
        
        const cliente = await clientesRepository.findOne(id);

        if(!cliente || cliente.data_remocao){
            throw new Error("Cliente não encontrado");
        }
        
        return cliente;
    }


}

export {ShowClienteServices}