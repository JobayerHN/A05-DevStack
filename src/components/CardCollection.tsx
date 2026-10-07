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
				<div className="w-full md:w-80 lg:w-150">
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

// import { use, useState } from "react";
// import type { Itechnology } from "../types/types";
// import AllTechs from "./sub-components/AllTechs";
// import SelectedStack from "./sub-components/SelectedStack";
// import { toast } from "react-toastify";

// interface ICardCollectionProps {
// 	technologyPromise: Promise<Itechnology[]>;
// }

// const CardCollection = ({ technologyPromise }: ICardCollectionProps) => {
// 	const technology = use(technologyPromise);

// 	const [selectedStack, setSelectedStack] = useState<Itechnology[]>([]);

// 	const handleAddToStack = (tech: Itechnology) => {
// 		setSelectedStack([...selectedStack, tech]);
// 		toast.success(`${tech.name} added to stack.`);
// 	};

// 	const handleRemoveFromStack = (id: number) => {
// 		const removedTech = selectedStack.find((tech) => tech.id === id);
// 		setSelectedStack(selectedStack.filter((tech) => tech.id !== id));

// 		if (removedTech) {
// 			toast.warn(`${removedTech.name} removed from stack!`);
// 		}
// 	};

// 	const handleClearAll = () => {
// 		setSelectedStack([]);
// 		toast.info("All cleared!");
// 	};

// 	return (
// 		<div className="w-full">
// 			{/* মোবাইল ফার্স্ট: প্রথমে flex-col, বড় স্ক্রিনে flex-row */}
// 			<div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-start gap-8 pb-16">
// 				{/* কার্ড গ্রিড: মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম, বড় স্ক্রিনে ৩ কলাম */}
// 				<div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
// 					{technology.map((tech) => (
// 						<AllTechs
// 							key={tech.id}
// 							tech={tech}
// 							onAddToStack={handleAddToStack}
// 							isSelected={selectedStack.some(
// 								(item) => item.id === tech.id,
// 							)}
// 						/>
// 					))}
// 				</div>

// 				{/* স্ট্যাক সাইডবার: বড় স্ক্রিনে নির্দিষ্ট জায়গায় স্টিকি থাকবে */}
// 				<div className="w-full lg:w-96 lg:sticky lg:top-24">
// 					<SelectedStack
// 						selectedStack={selectedStack}
// 						onRemoveFromStack={handleRemoveFromStack}
// 						onClearAll={handleClearAll}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default CardCollection;
