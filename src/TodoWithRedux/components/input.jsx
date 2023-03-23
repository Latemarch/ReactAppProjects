import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToDo } from "../fiatures/toDoSlice";

const Form = styled.form`
	display: flex;
	width: 100%;
	flex-grow: 1;
`;
const InputToDo = styled.input`
	background-color: rgba(0, 0, 0, 0.2);
	width: 70%;
	border: none;
	color: white;
	padding: 10px;
	&:focus {
		outline: none;
	}
	font-size: 1.2rem;
`;
const Button = styled.button`
	width: 30%;
	border: none;
	background-color: rgba(0, 0, 0, 0.2);
	color: white;
	&:hover {
		background-color: tomato;
	}
`;

export default function Input() {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addToDo(text));
		setText("");
	};
	return (
		<Form onSubmit={handleSubmit}>
			<InputToDo
				name="it"
				placeholder="Add Todo..."
				value={text}
				onChange={(event) => {
					setText(event.target.value);
					console.log(event.target.name);
				}}
			></InputToDo>
			<Button>Add</Button>
		</Form>
	);
}
