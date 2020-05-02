export class News {
    public title: string
    public description: string
    public summary: string
    public imagePath: string


    constructor(name: string, desc: string, summary: string, imagePath: string){
        this.title = name
        this.description = desc
        this.summary = summary
        this.imagePath = imagePath
    }
}