import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Chanson {
    // albumId : number
    @PrimaryGeneratedColumn()
    id? : number
    @Column({type: "varchar", length: 100})
    title : string
    @Column({nullable: true})
    url: string

    constructor(albumId: number, id: number, title: string, url: string, thumbnailUrl: string) {
        // this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.url = url;
    }
}