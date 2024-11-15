export interface Todo {
    //id?: number, //? pour dire que le champ est optionnel
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
