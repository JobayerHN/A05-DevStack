import { use, useState } from "react";
import type { Itechnology } from "../types/types";
import AllTechs from "./sub-components/AllTechs";
import SelectedStack from "./sub-components/SelectedStack";
import { toast } from "react-toastify";

interface ICardCollectionProps {
	technologyPromise: Promise<Itechnology[]>;
}

const CardCollection = ({ technologyPromise }: ICardCollectionProps) => {
	const technology = use(technologyPromise);

	const [selectedStack, setSelectedStack] = useState<Itechnology[]>([]);

	const handleAddToStack = (tech: Itechnology) => {
		setSelectedStack([...selectedStack, tech]);
		toast.success(`${tech.name} added to stack.`);
	};

	const handleRemoveFromStack = (id: number) => {
		const removedTech = selectedStack.find((tech) => tech.id === id);
		setSelectedStack(selectedStack.filter((tech) => tech.id !== id));

		if (removedTech) {
			toast.warn(`${removedTech.name} removed from stack!`);
		}
	};

	const handleClearAll = () => {
		setSelectedStack([]);
		toast.info("All cleared!");
	};

	return (
		<div>
			<div className="container m-auto flex flex-col lg:flex-row justify-between items-start gap-8 pb-15.25 px-4">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 lg:gap-5 justify-center">
					{technology.map((tech) => (
						<AllTechs
							key={tech.id}
							tech={tech}
							onAddToStack={handleAddToStack}
							isSelected={selectedStack.some(
								(item) => item.id === tech.id,
							)}
						></AllTechs>
					))}
				</div>
				<div className="w-full lg:w-150">
					<SelectedStack
						selectedStack={selectedStack}
						onRemoveFromStack={handleRemoveFromStack}
						onClearAll={handleClearAll}
					></SelectedStack>
				</div>
			</div>
		</div>
	);
};

export default CardCollection;
