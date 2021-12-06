import {EntityRepository, Repository} from "typeorm"
import {Contrato} from "../entities/Contrato"

@EntityRepository(Contrato)
class ContratoRepositories extends Repository<Contrato> {}

export{ContratoRepositories}



/*
entidade (t_cliente < - > ORM < - > BD
    Repositórios
*/