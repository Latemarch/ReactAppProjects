import { Outlet } from "react-router-dom";
import YoutubeHeader from "./Components/YoutubeHeader";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const queryClient = new QueryClient();
export default function AppYoutube() {
	return (
		<Wrapper>
			<YoutubeHeader />
			<QueryClientProvider client={queryClient}>
				<Outlet />
			</QueryClientProvider>
		</Wrapper>
	);
}
