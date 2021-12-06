import {EntityRepository, Repository} from "typeorm"
import {Evento} from "../entities/ContratoEvento"

@EntityRepository(Evento)
class EventosRepositories extends Repository<Evento> {}

export{EventosRepositories}



/*
entidade (t_cliente < - > ORM < - > BD
    Repositórios
*/