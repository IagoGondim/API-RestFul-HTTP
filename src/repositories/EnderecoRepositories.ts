import {EntityRepository, Repository} from "typeorm"
import {Endereco} from "../entities/Endereco"

@EntityRepository(Endereco)
class EnderecosRepositories extends Repository<Endereco> {}

export{EnderecosRepositories}