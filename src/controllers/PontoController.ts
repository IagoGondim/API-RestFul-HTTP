import { Request, Response } from "express";
import { ListPontoServices} from "../services/PontoService/ListPontoService";
import { CreatePontoServices} from "../services/PontoService/CreatePontoService"
import { DeletePontoServices } from "../services/PontoService/DeletePontoService";
import { ShowPontoServices} from "../services/PontoService/ShowPontoService"
import { AlterarContratoServices } from "../services/ContratoService/AlterarContratoService";
import { CreateContratoEventoServices } from "../services/ContratoEventoService/CreateContratoEventoService";
import { ContratoRepositories } from "../repositories/ContratoRepositories";
// Controller ponto responsável pelos métodos de buscar, mostrar, criar e deletar
export default class PontoController{
    async index(request: Request, response: Response): Promise<Response> {
        try{
        const listPonto = new ListPontoServices();

        const ponto = await listPonto.execute();
        console.log(ponto)
        return response.status(200).json(ponto)
    }catch(err){
        return response.status(400).json({error:err.message});
}}
    
    async create(request: Request, response: Response){
        try{
        const {cliente_id, endereco_id} = request.body;

        const createPontoService = new CreatePontoServices();
            
        const ponto = await createPontoService.execute({cliente_id, endereco_id});

        return response.json(ponto);
        } catch(err){
            return response.status(400).json({error:err.message});
}}
    async show(request: Request, response: Response): Promise<Response>{
        try{
        const {id} = request.params;

        const showPonto = new ShowPontoServices();

        const ponto = await showPonto.execute({id});

        return response.json(ponto);
    }catch(err){
        return response.status(400).json({error:err.message});
}}
    async delete(request: Request, response: Response): Promise<Response>{
        try{
        const{id} = request.params;

        const deletePonto = new DeletePontoServices();

        const ponto = await deletePonto.execute({id});

        const contratoRepo = new ContratoRepositories()
        const contratoAntigo = await contratoRepo.find({where:{id: ponto.contrato.id}})


        const alterarContrato = new AlterarContratoServices();

        const contrato = await alterarContrato.execute({estado:"Desativado Temporario", id:ponto.contrato.id})


        const createContratoEventoServices:any = new CreateContratoEventoServices()
        
        await createContratoEventoServices.execute({contratoAntigo})
            
        return response.json();
    }catch(err){
        return response.status(400).json({error:err.message});
}}

}
export {PontoController}

