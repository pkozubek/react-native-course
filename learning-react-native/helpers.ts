import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import { ITodo } from './interfaces';

export function generateTodo(text: string ) {
    const todo: ITodo = {
        id: uuidv4(),
        text
    }

    return todo;
}

export const colors = {
    darkRed: '#8B0000'
}