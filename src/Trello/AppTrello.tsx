import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import { toDoState } from "./atoms";
import TrelloBoard from "./components/TrelloBoard";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export default function AppTrello() {
	const [toDos, setToDos] = useRecoilState<string[]>(toDoState);
	const onDragEnd = ({ destination, source }: DropResult) => {
		setToDos((oldToDos) => {
			if (!destination) return oldToDos;
			const copyToDos = [...oldToDos];
			copyToDos.splice(source.index, 1);
			copyToDos.splice(destination.index, 0, source.droppableId);
			return copyToDos;
		});
	};
	console.log(toDos);
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<TrelloBoard toDos={toDos} />
			</Wrapper>
		</DragDropContext>
	);
}
