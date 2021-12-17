import { getCustomRepository } from "typeorm";
import {Cliente} from "../../entities/Cliente"
import { ClientesRepositories} from "../../repositories/ClientesRepositories"

//Classe resposável por listar todos os cliente do banco de dados
class ListClienteServices{

    async execute(): Promise<Cliente[]>{
        const clientesRepository = getCustomRepository(ClientesRepositories);
        
        const clientes = await clientesRepository.find({where:{data_remocao:null}})
        return clientes;

        
    }


}

export {ListClienteServices}