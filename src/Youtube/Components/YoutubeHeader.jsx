import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

const Header = styled.div`
	display: flex;
	font-size: 30px;
	justify-content: center;
	width: 100vw;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export default function YoutubeHeader() {
	const { keyward } = useParams();
	const [text, setText] = useState();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(text);
		setText("");
	};
	useEffect(() => setText(keyward || ""), [keyward]);
	return (
		<Header>
			<Link to={"/youtube"}>
				<div>
					<BsYoutube />
					Youtube
				</div>
			</Link>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={text}
					placeholder={"Search..."}
					onChange={(e) => setText(e.target.value)}
				/>
				<button>
					<BsSearch />
				</button>
			</form>
		</Header>
	);
}
