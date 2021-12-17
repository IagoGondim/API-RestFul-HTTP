import {EntityRepository, Repository} from "typeorm"
import {Evento} from "../entities/ContratoEvento"
// Responsável por isolar a entidade Evento
@EntityRepository(Evento)
class EventoRepositories extends Repository<Evento> {}

export{EventoRepositories}
