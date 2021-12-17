import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid  } from "uuid";
import { Ponto } from "./Ponto";
//Entidade responsável por mapear para a classe de banco de dados t_contrato
@Entity("t_contrato")
class Contrato {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn()
    data_criacao: Date;
    
    @UpdateDateColumn()
    data_atualizacao: Date;

    @OneToOne(()=> Ponto,{onDelete:'CASCADE'})
    @JoinColumn({name: "ponto_id"})
    ponto: Ponto;
    @Column()
    ponto_id: string;

    @DeleteDateColumn()
    data_remocao: Date;

    @Column()
    estado: string;

    constructor(){
        if(this.id)
        this.id = uuid();
    }

}
export {Contrato};

// Entidade < - > ORM < - > BD (t_cliente)