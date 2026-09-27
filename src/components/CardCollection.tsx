import { use } from "react";
import type { Itechnology } from "../types/types";
import AllTechs from "./sub-components/AllTechs";
import SelectedStack from "./sub-components/selectedStack";

interface ICardCollectionProps {
	technologyPromise: Promise<Itechnology[]>;
}

const CardCollection = ({ technologyPromise }: ICardCollectionProps) => {
	const technology = use(technologyPromise);

	return (
		<div>
			<div className="container m-auto flex justify-between items-start gap-8">
				<div className="grid grid-cols-3 gap-5">
					{technology.map((tech) => (
						<AllTechs tech={tech}></AllTechs>
					))}
				</div>
				<SelectedStack></SelectedStack>
			</div>
		</div>
	);
};

export default CardCollection;
