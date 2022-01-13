import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid  } from "uuid";
import { Contrato } from "./Contrato";
//Entidade responsável por mapear para a classe de banco de dados t_contrato_evento
@Entity("t_contrato_evento")
class Evento {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn()
    data_criacao: Date;
    
    @UpdateDateColumn()
    data_atualizacao: Date;

    @ManyToOne(()=> Contrato)
    @JoinColumn({name: "contrato_id"})
    contrato: Contrato
    
    @Column()
    contrato_id: string;

    @Column()
    estado_anterior: string;

    @Column()
    estado_posterior: string;

    constructor(){
        if(this.id)
        this.id = uuid();
    }

}
export {Evento};

// Entidade < - > ORM < - > BD (t_cliente)