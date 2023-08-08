export interface IListItem extends ITodo {
    removeItem: (val: string) => void;
}

export interface ITodo {
    id: string,
    text: string
}