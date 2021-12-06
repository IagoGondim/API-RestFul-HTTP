import { Request, Response } from "express";
import { ListContratoServices} from "../services/ContratoService/ListContratoService";
import { ShowContratoServices} from "../services/ContratoService/ShowContratoService"
import { CreateContratoServices} from "../services/ContratoService/CreateContratoService"
import { DeleteContratoServices } from "../services/ContratoService/DeleteContratoService";

export default class ContratoController{
    async index(request: Request, response: Response): Promise<Response> {
        try{
        const listContrato = new ListContratoServices();

        const contrato = await listContrato.execute();
        console.log(contrato)
        return response.status(200).json(contrato)
    }catch(err){
        return response.status(400).json({error:err.message});
    }}
    async show(request: Request, response: Response): Promise<Response>{
        try{
        const {id} = request.params;

        const showContrato = new ShowContratoServices();

        const contrato = await showContrato.execute({id});

        return response.json(contrato);
    }catch(err){
        return response.status(400).json({error:err.message});
    }}
    async create(request: Request, response: Response){
        try{
        const {ponto_id,estado} = request.body;

        const createContratoService = new CreateContratoServices();

        const contrato = await createContratoService.execute({ponto_id, estado});

        return response.json(contrato);
        } catch(err){
            return response.status(400).json({error:err.message});
    }}
    async delete(request: Request, response: Response): Promise<Response>{
        try{
        const{id} = request.params;

        const deleteContrato = new DeleteContratoServices();

        await deleteContrato.execute({id});

        return response.json([]);
    }catch(err){
        return response.status(400).json({error:err.message});
    }}
}
export {ContratoController}

