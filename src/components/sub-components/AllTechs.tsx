import { IoStarSharp } from "react-icons/io5";
import type { Itechnology } from "../../types/types";

interface AllTechProps {
	tech: Itechnology;
	onAddToStack: (tech: Itechnology) => void;
	isSelected: boolean;
}

const AllTechs = ({ tech, onAddToStack, isSelected }: AllTechProps) => {
	return (
		<div className="container">
			<div
				className={`rounded-2xl border border-slate-100 ${isSelected && "shadow-pink-600"} bg-white p-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow`}
			>
				<div className="pb-3.5">
					<figure className="flex justify-between items-start pb-3">
						<img
							className="max-w-7 h-auto"
							src={tech.icon}
							alt="Shoes"
						/>
						<span
							className={`badge badge-xs ${tech.badgeBg} ${tech.badgeText} rounded-full px-2 py-3 font-pjs font-semibold text-xs leading-4`}
						>
							{tech.badge}
						</span>
					</figure>
				</div>
				<div className="">
					<h2 className="card-title pb-2">{tech.name}</h2>
					<p className="pb-6 font-pqs font-normal text-[16px] leading-5 text-[#64748B]">
						{tech.description}
					</p>
					<div className="flex justify-between items-center pb-4.5">
						<div className="badge badge-soft font-pqs font-medium text-xs leading-4 text-[#475569]">
							{tech.category}
						</div>
						<span className="badge font-pqs font-medium text-xs leading-4 text-[#64748B]">
							{tech.difficulty}
						</span>
						<div className="flex items-center">
							<IoStarSharp className="text-[#FBBF24]" />
							<p className="font-pqs font-semibold text-xs leading-4 text-[#334155]">
								{tech.rating}
							</p>
						</div>
					</div>
					<div>
						<button
							onClick={() => onAddToStack(tech)}
							className={`btn ${isSelected ? "disabled:text-[#0A0F1D] " : "btn-neutral"} w-full font-pqs font-medium leading-4 text-xs`}
							disabled={isSelected}
						>
							{isSelected ? "Selected" : "Add to Stack"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllTechs;
