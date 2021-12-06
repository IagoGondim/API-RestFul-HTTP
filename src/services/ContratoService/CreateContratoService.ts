import { getCustomRepository } from "typeorm";
import { ContratoRepositories} from "../../repositories/ContratoRepositories"

interface IContratoRequest{
    ponto_id: string;
    estado: string;
    }

class CreateContratoServices{
    async execute({ponto_id, estado}): Promise<IContratoRequest>{
        const contratosRepository = getCustomRepository(ContratoRepositories);

        const contratoAlreadyExists = await contratosRepository.findOne({
            ponto_id, estado
        });
        if(contratoAlreadyExists){
            throw new Error("Contrato já cadastrado");
        }
        const contrato = contratosRepository.create({
            ponto_id, estado
        })
        await contratosRepository.save(contrato);

        return contrato;
    }


}

export {CreateContratoServices}