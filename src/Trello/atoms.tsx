import { atom } from "recoil";
export type toDo = string;
export interface IToDos {
	toDos: toDo[];
}
export const toDoState = atom({
	key: "toDo",
	default: ["a", "b", "c", "d", "e", "f"],
});
