import {EntityRepository, Repository} from "typeorm"
import {Ponto} from "../entities/Ponto"
// Responsável por isolar a entidade Ponto
@EntityRepository(Ponto)
class PontosRepositories extends Repository<Ponto> {}

export{PontosRepositories}