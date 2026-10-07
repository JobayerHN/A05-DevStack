// import type { Itechnology } from "../../types/types";
// import { RxCross2 } from "react-icons/rx";
// interface SelectedStackProps {
// 	selectedStack: Itechnology[];
// 	onRemoveFromStack: (id: number) => void;
// 	onClearAll: () => void;
// }

// const SelectedStack = ({
// 	selectedStack,
// 	onRemoveFromStack,
// 	onClearAll,
// }: SelectedStackProps) => {
// 	return (
// 		<div className="card bg-base-100 w-full  lg:w-96 shadow-sm border">
// 			<div className="pt-5 pr-5 pl-5 pb-8">
// 				<h2 className="card-title">Your Stack</h2>
// 				{selectedStack.length === 0 ? (
// 					<>
// 						<p className="mt-1 text-sm text-slate-400">
// 							No technologies selected yet.
// 						</p>
// 						<div className="mt-6 rounded-xl flex items-center justify-center border border-dashed border-slate-200 py-6 text-slate-400 font-pjs font-normal text-xs leading-4">
// 							Your stack is empty.
// 						</div>
// 					</>
// 				) : (
// 					<div>
// 						<p className="mt-1 text-sm text-slate-400">
// 							{selectedStack.length} Technologies Selected
// 						</p>
// 						{selectedStack.map((tech) => (
// 							<div
// 								key={tech.id}
// 								className="border border-[#E5E7EB] pr-4 pl-4 pt-2.5 pb-2.5 mt-4 rounded-lg"
// 							>
// 								<div className="flex  justify-between items-center">
// 									<div className="flex gap-3.25 items-center">
// 										<div>
// 											<img
// 												className="w-5 h-6"
// 												src={tech.icon}
// 												alt={tech.name}
// 											/>
// 										</div>

// 										<div>
// 											<p className="font-pjs font-bold text-[16px] text-[#0F172A]">
// 												{tech.name}
// 											</p>
// 											<p className="font-pjs font-bold text-[10px] text-[#94A3B8]">
// 												{tech.category}
// 											</p>
// 										</div>
// 									</div>
// 									<button
// 										className="cursor-pointer"
// 										onClick={() =>
// 											onRemoveFromStack(tech.id)
// 										}
// 									>
// 										<RxCross2 className="w-4 h-4" />
// 									</button>
// 								</div>
// 							</div>
// 						))}
// 						{selectedStack.length > 0 && (
// 							<button
// 								onClick={onClearAll}
// 								className="btn btn-outline btn-error mt-12 w-full rounded-lg"
// 							>
// 								Clear All
// 							</button>
// 						)}
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default SelectedStack;

import type { Itechnology } from "../../types/types";
import { RxCross2 } from "react-icons/rx";

interface SelectedStackProps {
	selectedStack: Itechnology[];
	onRemoveFromStack: (id: number) => void;
	onClearAll: () => void;
}

const SelectedStack = ({
	selectedStack,
	onRemoveFromStack,
	onClearAll,
}: SelectedStackProps) => {
	return (
		<div className="card bg-base-100 shadow-sm border border-slate-100 rounded-2xl">
			<div className="p-5 sm:p-6">
				<h2 className="card-title text-xl font-bold text-[#0F172A]">
					Your Stack
				</h2>

				{selectedStack.length === 0 ? (
					<>
						<p className="mt-1 text-sm text-slate-400">
							No technologies selected yet.
						</p>
						<div className="mt-6 rounded-xl flex items-center justify-center border border-dashed border-slate-200 py-8 text-slate-400 font-pjs font-normal text-xs leading-4">
							Your stack is empty.
						</div>
					</>
				) : (
					<div>
						<p className="mt-1 text-sm text-slate-400">
							{selectedStack.length}{" "}
							{selectedStack.length === 1
								? "Technology"
								: "Technologies"}{" "}
							Selected
						</p>

						<div className="max-h-[350px] overflow-y-auto pr-1 my-2">
							{selectedStack.map((tech) => (
								<div
									key={tech.id}
									className="border border-[#E5E7EB] px-4 py-3 mt-3 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors"
								>
									<div className="flex justify-between items-center">
										<div className="flex gap-3 items-center">
											<img
												className="w-5 h-5 object-contain"
												src={tech.icon}
												alt={tech.name}
											/>
											<div>
												<p className="font-pjs font-bold text-sm text-[#0F172A]">
													{tech.name}
												</p>
												<p className="font-pjs font-semibold text-[10px] text-[#94A3B8]">
													{tech.category}
												</p>
											</div>
										</div>
										<button
											className="cursor-pointer p-1 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-800"
											onClick={() =>
												onRemoveFromStack(tech.id)
											}
											aria-label={`Remove ${tech.name}`}
										>
											<RxCross2 className="w-4 h-4" />
										</button>
									</div>
								</div>
							))}
						</div>

						<button
							onClick={onClearAll}
							className="btn btn-outline btn-error mt-4 w-full rounded-lg text-xs"
						>
							Clear All
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default SelectedStack;
