import {EntityRepository, Repository} from "typeorm"
import {Cliente} from "../entities/Cliente"
// Responsável por isolar a entidade Cliente
@EntityRepository(Cliente)
class ClientesRepositories extends Repository<Cliente> {}

export{ClientesRepositories}
