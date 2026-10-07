// import { IoStarSharp } from "react-icons/io5";
// import type { Itechnology } from "../../types/types";

// interface AllTechProps {
// 	tech: Itechnology;
// 	onAddToStack: (tech: Itechnology) => void;
// 	isSelected: boolean;
// }

// const AllTechs = ({ tech, onAddToStack, isSelected }: AllTechProps) => {
// 	return (
// 		<div className="container">
// 			<div
// 				className={`rounded-2xl border border-slate-100 ${isSelected && "shadow-pink-600"} bg-white p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow`}
// 			>
// 				<div className="pb-3.5">
// 					<figure className="flex justify-between items-start pb-3">
// 						<img
// 							className="max-w-7 h-auto"
// 							src={tech.icon}
// 							alt="Shoes"
// 						/>
// 						<span
// 							className={`badge badge-xs ${tech.badgeBg} ${tech.badgeText} rounded-full px-2 py-3 font-pjs font-semibold text-xs leading-4`}
// 						>
// 							{tech.badge}
// 						</span>
// 					</figure>
// 				</div>
// 				<div className="">
// 					<h2 className="card-title pb-2">{tech.name}</h2>
// 					<p className="pb-6 font-pqs font-normal text-[16px] leading-5 text-[#64748B]">
// 						{tech.description}
// 					</p>
// 					<div className="flex justify-between items-center pb-4.5">
// 						<div className="badge badge-soft font-pqs font-medium text-xs leading-4 text-[#475569]">
// 							{tech.category}
// 						</div>
// 						<span className="badge font-pqs font-medium text-xs leading-4 text-[#64748B]">
// 							{tech.difficulty}
// 						</span>
// 						<div className="flex items-center">
// 							<IoStarSharp className="text-[#FBBF24]" />
// 							<p className="font-pqs font-semibold text-xs leading-4 text-[#334155]">
// 								{tech.rating}
// 							</p>
// 						</div>
// 					</div>
// 					<div>
// 						<button
// 							onClick={() => onAddToStack(tech)}
// 							className={`btn ${isSelected ? "disabled:text-[#0A0F1D] " : "btn-neutral"} w-full rounded-lg font-pqs font-medium leading-4 text-xs`}
// 							disabled={isSelected}
// 						>
// 							{isSelected ? "Selected" : "Add to Stack"}
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AllTechs;

import { IoStarSharp } from "react-icons/io5";
import type { Itechnology } from "../../types/types";

interface AllTechProps {
	tech: Itechnology;
	onAddToStack: (tech: Itechnology) => void;
	isSelected: boolean;
}

const AllTechs = ({ tech, onAddToStack, isSelected }: AllTechProps) => {
	return (
		<div
			className={`w-full rounded-2xl border border-slate-100 ${
				isSelected
					? "border-pink-500/50 shadow-md shadow-pink-500/10"
					: "bg-white"
			} p-5 sm:p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all flex flex-col justify-between`}
		>
			<div>
				<div className="pb-3.5">
					<figure className="flex justify-between items-start pb-3">
						<img
							className="w-7 h-7 object-contain"
							src={tech.icon}
							alt={tech.name}
						/>
						<span
							className={`badge badge-xs ${tech.badgeBg} ${tech.badgeText} rounded-full px-2 py-3 font-pjs font-semibold text-xs leading-4`}
						>
							{tech.badge}
						</span>
					</figure>
				</div>
				<div>
					<h2 className="card-title text-lg font-bold pb-2">
						{tech.name}
					</h2>
					<p className="pb-6 font-pqs font-normal text-sm sm:text-base leading-5 text-[#64748B]">
						{tech.description}
					</p>
				</div>
			</div>

			<div>
				<div className="flex flex-wrap gap-2 justify-between items-center pb-4.5">
					<div className="badge badge-soft font-pqs font-medium text-xs leading-4 text-[#475569]">
						{tech.category}
					</div>
					<span className="badge font-pqs font-medium text-xs leading-4 text-[#64748B]">
						{tech.difficulty}
					</span>
					<div className="flex items-center gap-1">
						<IoStarSharp className="text-[#FBBF24]" />
						<p className="font-pqs font-semibold text-xs leading-4 text-[#334155]">
							{tech.rating}
						</p>
					</div>
				</div>

				<button
					onClick={() => onAddToStack(tech)}
					className={`btn ${
						isSelected
							? "btn-disabled bg-slate-100 text-[#0A0F1D]"
							: "btn-neutral"
					} w-full rounded-lg font-pqs font-medium leading-4 text-xs`}
					disabled={isSelected}
				>
					{isSelected ? "Selected" : "Add to Stack"}
				</button>
			</div>
		</div>
	);
};

export default AllTechs;
