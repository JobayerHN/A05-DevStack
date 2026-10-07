import { Suspense } from "react";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import type { Itechnology } from "./types/types";
import CardCollection from "./components/CardCollection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologyPromise = async (): Promise<Itechnology[]> => {
	const res = await fetch("/data.json");
	const data = await res.json();
	return data;
};

function App() {
	return (
		<>
			<div>
				<ToastContainer></ToastContainer>
				<Nav></Nav>
				<Banner></Banner>
				<Explore></Explore>
				<Suspense
					fallback={
						<div className="container mx-auto px-4 py-8">
							<h2 className="text-xl font-normal">
								Loading technologies....
							</h2>
						</div>
					}
				>
					<CardCollection
						technologyPromise={technologyPromise()}
					></CardCollection>
				</Suspense>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;
