import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid  } from "uuid";

@Entity("t_contrato")
class Contrato {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @CreateDateColumn()
    data_criacao: Date;
    
    @UpdateDateColumn()
    data_atualizacao: Date;

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