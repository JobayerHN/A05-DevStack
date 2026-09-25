import { use } from "react";
import type { Itechnology } from "../types/types";

interface ICardCollectionProps {
	technologyPromise: Promise<Itechnology[]>;
}

const CardCollection = ({ technologyPromise }: ICardCollectionProps) => {
	const technology = use(technologyPromise);

	return (
		<div>
			{technology.map((tech) => (
				<div>
					<div className="container m-auto card bg-base-100 w-96 shadow-sm">
						<figure>
							<img
								src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{tech.name}</h2>
							<p>{tech.description}</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Add to Stock
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardCollection;
