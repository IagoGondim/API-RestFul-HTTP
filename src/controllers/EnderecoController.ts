import { Request, Response } from "express";
import { ListEnderecoServices} from "../services/EnderecoService/ListEnderecoService";
import { ShowEnderecoServices} from "../services/EnderecoService/ShowEnderecoService"
import { CreateEnderecoServices} from "../services/EnderecoService/CreateEnderecoService"
import { AlterarEnderecoServices } from "../services/EnderecoService/AlterarEnderecoService";
import { DeleteEnderecoServices } from "../services/EnderecoService/DeleteEnderecoService";
// Controller endereço responsável pelos métodos de buscar, mostrar, criar, atualizar e deletar
export default class EnderecoController{
    async index(request: Request, response: Response): Promise<Response> {
        try{
        const listEndereco = new ListEnderecoServices();

        const endereco = await listEndereco.execute();
        console.log(endereco)
        return response.status(200).json(endereco)
        }catch(err){
            return response.status(400).json({error:err.message});
}}
    async show(request: Request, response: Response): Promise<Response>{
        try{
        const {id} = request.params;

        const showEndereco = new ShowEnderecoServices();

        const endereco = await showEndereco.execute({id});

        return response.json(endereco);
    }catch(err){
        return response.status(400).json({error:err.message});
}}
    async create(request: Request, response: Response){
        try{
        const {logradouro, bairro, numero} = request.body;

        const createEnderecoService = new CreateEnderecoServices();
            
        const endereco = await createEnderecoService.execute({logradouro, bairro, numero});

        return response.json(endereco);
        } catch(err){
            return response.status(400).json({error:err.message});
        }
    
    }
    async update(request: Request, response: Response): Promise<Response>{
        try{
        const {logradouro, bairro, numero} = request.body;
        const {id} = request.params;

        const alterarEndereco = new AlterarEnderecoServices();

        const endereco = await alterarEndereco.execute({logradouro, bairro, numero});

        return response.json(endereco);
    }catch(err){
        return response.status(400).json({error:err.message});
}}
    
    async delete(request: Request, response: Response): Promise<Response>{
        try{
        const{id} = request.params;

        const deleteEndereco = new DeleteEnderecoServices();

        await deleteEndereco.execute({id});

        return response.json([]);
    }catch(err){
        return response.status(400).json({error:err.message});
}}
}
export {EnderecoController}

