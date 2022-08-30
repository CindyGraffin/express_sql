import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Chanson } from "./Chanson";

@Entity()
export class Parole {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column({name: 'verse_count'})
    verseCount: number;
    @Column()
    text: string;

    @OneToOne(() => Chanson, (chanson) => chanson.parole)
    chanson?: Chanson;

    constructor(verseCount: number, text: string, id?: number, chanson?: Chanson) {
        this.id = id;
        this.verseCount = verseCount;
        this.text = text;
        this.chanson = chanson;
    }
}