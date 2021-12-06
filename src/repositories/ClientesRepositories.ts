import {EntityRepository, Repository} from "typeorm"
import {Cliente} from "../entities/Cliente"

@EntityRepository(Cliente)
class ClientesRepositories extends Repository<Cliente> {}

export{ClientesRepositories}



/*
entidade (t_cliente < - > ORM < - > BD
    Repositórios
*/