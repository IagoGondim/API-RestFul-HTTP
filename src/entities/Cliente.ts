import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid  } from "uuid";
//Entidade responsável por mapear para a classe de banco de dados t_cliente
@Entity("t_cliente")
class Cliente {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn()
    data_criacao: Date;
    
    @UpdateDateColumn()
    data_atualizacao: Date;

    @Column()
    nome: string;

    @DeleteDateColumn()
    data_remocao: Date;

    @Column()
    tipo: string;

    constructor(){
        if(this.id)
        this.id = uuid();
    }

}
export {Cliente};

// Entidade < - > ORM < - > BD (t_cliente)