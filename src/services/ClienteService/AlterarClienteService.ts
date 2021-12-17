import { getCustomRepository } from "typeorm";
import {Cliente} from "../../entities/Cliente"
import { ClientesRepositories} from "../../repositories/ClientesRepositories"

interface IClientRequest{
    id: string;
    nome: string;
    tipo: string;
}
//Classe responsável por alterar dados de um cliente especifíco através do uuid no banco de dados
class AlterarClienteServices{

    async execute({nome, tipo, id}: IClientRequest): Promise<Cliente>{
        const clientesRepository = getCustomRepository(ClientesRepositories);
        
        const cliente = await clientesRepository.findOne(id);

        if(!cliente){
            throw new Error("Cliente não encontrado");
        }
        cliente.nome = nome
        cliente.tipo = tipo

        await clientesRepository.save(cliente);


        return cliente;
    }


}

export {AlterarClienteServices}