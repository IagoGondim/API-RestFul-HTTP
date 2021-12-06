import { Request, Response } from "express";
import { ListClienteServices} from "../services/ClienteService/ListClienteService";
import { ShowClienteServices} from "../services/ClienteService/ShowClienteService"
import { CreateClienteServices} from "../services/ClienteService/CreateClienteService"
import { AlterarClienteServices } from "../services/ClienteService/AlterarClienteService";
import { DeleteClienteServices } from "../services/ClienteService/DeleteClienteService";

export default class ClienteController{
    async index(request: Request, response: Response): Promise<Response> {
        try{
        const listClients = new ListClienteServices();

        const clientes = await listClients.execute();
        console.log(clientes)
        return response.status(200).json(clientes)
        }catch(err){
            return response.status(400).json({error:err.message});
    }}
    async show(request: Request, response: Response): Promise<Response>{
        try{
        const {id} = request.params;

        const showCliente = new ShowClienteServices();

        const cliente = await showCliente.execute({id});

        return response.json(cliente);
        } catch(err){
            return response.status(400).json({error:err.message});
        }
    }
    async create(request: Request, response: Response){
        try{
        const {nome, tipo} = request.body;

        const createClienteService = new CreateClienteServices();

        const cliente = await createClienteService.execute({nome, tipo});

        return response.json(cliente);
        } catch(err){
            return response.status(400).json({error:err.message});
        }
    
    }
    async update(request: Request, response: Response): Promise<Response>{
        try{
        const {nome, tipo} = request.body;
        const {id} = request.params;

        const alterarCliente = new AlterarClienteServices();

        const cliente = await alterarCliente.execute({nome, tipo, id});

        return response.json(cliente);
        } catch(err){
            return response.status(400).json({error:err.message});
    }}

    async delete(request: Request, response: Response): Promise<Response>{
        try{
        const{id} = request.params;

        const deleteCliente = new DeleteClienteServices();

        await deleteCliente.execute({id});

        return response.json([]);
        } catch(err){
            return response.status(400).json({error:err.message});
    }}
}
export {ClienteController}

