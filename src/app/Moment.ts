export interface Moment{
    id?: number;
    title: string;
    description: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    comentarios?: [{text: string, username: string}];
}