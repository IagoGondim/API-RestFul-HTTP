import { getCustomRepository } from "typeorm";
import { PontosRepositories} from "../../repositories/PontoRepositories"

interface IPontoRequest{
    cliente_id: string;
    endereco_id: string;
}
// Classe resposável por criar um ponto no banco de dados
class CreatePontoServices{
    async execute({cliente_id, endereco_id}: IPontoRequest){
        const pontosRepository = getCustomRepository(PontosRepositories);

        const pontoAlreadyExists = await pontosRepository.findOne({
            where:{cliente_id, endereco_id}
        });
        if(pontoAlreadyExists){
            throw new Error("Ponto já cadastrado");
        }
        const ponto = pontosRepository.create({
            cliente_id, endereco_id
        })
        await pontosRepository.save(ponto);

        return ponto;
    }


}

export {CreatePontoServices}