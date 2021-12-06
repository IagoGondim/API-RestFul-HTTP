import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid  } from "uuid";
import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";

@Entity("t_ponto")
class Ponto {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn()
    data_criacao: Date;
    
    @UpdateDateColumn()
    data_atualizacao: Date;

    @OneToOne(()=> Cliente,{onDelete:'CASCADE'})
    @JoinColumn({name: "cliente_id"})
    cliente: Cliente;
    @Column()
    cliente_id: string;

    @OneToOne(()=> Endereco,{onDelete:'CASCADE'})
    @JoinColumn({name: "endereco_id"})
    endereco: Endereco;
    @Column()
    endereco_id: string;
    
    @DeleteDateColumn()
    data_remocao: Date;

    constructor(){
        if(this.id)
        this.id = uuid();
    }

}
export {Ponto};

// Entidade < - > ORM < - > BD (t_cliente)