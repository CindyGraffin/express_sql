import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Parole } from './Parole';

@Entity()
export class Chanson {
    // albumId : number
    @PrimaryGeneratedColumn()
    id? : number
    @Column({type: "varchar", length: 100})
    title : string
    @Column({nullable: true})
    url: string
    @OneToOne(() => Parole)
    @JoinColumn()
    parole: Parole

    constructor(albumId: number, id: number, title: string, url: string, parole: Parole) {
        // this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.url = url;
        this.parole = parole;
    }
}  