import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid  } from "uuid";
//Entidade responsável por mapear para a classe de banco de dados t_endereco
@Entity("t_endereco")
class Endereco {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn()
    data_criacao: Date;
    
    @UpdateDateColumn()
    data_atualizacao: Date;

    @Column()
    logradouro: string;

    @Column()
    bairro: string;
    
    @Column()
    numero: number;

    @DeleteDateColumn()
    data_remocao: Date;

    constructor(){
        if(this.id)
        this.id = uuid();
    }

}
export {Endereco};

// Entidade < - > ORM < - > BD (t_cliente)