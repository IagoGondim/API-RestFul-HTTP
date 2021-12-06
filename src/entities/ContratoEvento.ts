import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid  } from "uuid";

@Entity("t_contrato_evento")
class Evento {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn()
    data_criacao: Date;
    
    @UpdateDateColumn()
    data_atualizacao: Date;

    @Column()
    contrato_id: string;

    @Column()
    estado_anterior: String;

    @Column()
    estado_posterior: string;

    constructor(){
        if(this.id)
        this.id = uuid();
    }

}
export {Evento};

// Entidade < - > ORM < - > BD (t_cliente)