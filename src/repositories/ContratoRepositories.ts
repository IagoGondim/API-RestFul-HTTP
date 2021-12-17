import {EntityRepository, Repository} from "typeorm"
import {Contrato} from "../entities/Contrato"
// Responsável por isolar a entidade contrato
@EntityRepository(Contrato)
class ContratoRepositories extends Repository<Contrato> {}

export{ContratoRepositories}