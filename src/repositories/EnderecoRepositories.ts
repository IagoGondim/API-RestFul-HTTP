import {EntityRepository, Repository} from "typeorm"
import {Endereco} from "../entities/Endereco"
// Responsável por isolar a entidade Endereco
@EntityRepository(Endereco)
class EnderecosRepositories extends Repository<Endereco> {}

export{EnderecosRepositories}