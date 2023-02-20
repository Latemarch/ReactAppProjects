import React from "react";
import styled from "styled-components";
import { projects } from "./index";
import { Link } from "react-router-dom";

const Header = styled.div`
	display: flex;
	height: 5%;
	width: 100%;
	padding: 20px;
	justify-content: space-between;
	align-items: center;
	background-color: teal;
	position: relative;
	top: 0;
`;
const Project = styled.div`
	display: flex;
	text-transform: uppercase;
	padding: 0 10px;
`;

export default function SearchHearder() {
	return (
		<Header>
			<Link to="/">HOME</Link>
			{projects.map((p, index) => (
				<Link to={`${p.path}`} key={`${index}${p}`}>
					<Project>{p.path}</Project>
				</Link>
			))}
		</Header>
	);
}
