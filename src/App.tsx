import { Suspense } from "react";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import type { Itechnology } from "./types/types";

const technologyfetch = async (): Promise<Itechnology[]> => {
	const res = await fetch("/public/data.json");
	const data = await res.json();
	return data;
};

function App() {
	return (
		<>
			<div>
				<Nav></Nav>
				<Banner></Banner>
				<Explore></Explore>
				<Suspense fallback={<h2>Loading....</h2>}></Suspense>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;
