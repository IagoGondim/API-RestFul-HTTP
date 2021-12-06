import {EntityRepository, Repository} from "typeorm"
import {Ponto} from "../entities/Ponto"

@EntityRepository(Ponto)
class PontosRepositories extends Repository<Ponto> {}

export{PontosRepositories}