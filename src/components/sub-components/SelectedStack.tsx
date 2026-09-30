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
		<div className="card bg-base-100 w-96 shadow-sm">
			<div className="pt-5 pr-5 pl-5 pb-8">
				<h2 className="card-title">Your Stack</h2>
				{selectedStack.length === 0 ? (
					<>
						<p className="mt-1 text-sm text-slate-400">
							No technologies selected yet.
						</p>
						<div className="mt-6 rounded-xl flex items-center justify-center border border-dashed border-slate-200 py-6 text-slate-400 font-pjs font-normal text-xs leading-4">
							Your stack is empty.
						</div>
					</>
				) : (
					<div>
						<p className="mt-1 text-sm text-slate-400">
							{selectedStack.length} Technologies Selected
						</p>
						{selectedStack.map((tech) => (
							<div
								key={tech.id}
								className="border border-[#E5E7EB] pr-4 pl-4 pt-2.5 pb-2.5 mt-4 rounded-lg"
							>
								<div className="flex  justify-between items-center">
									<div className="flex gap-3.25 items-center">
										<div>
											<img
												className="w-5 h-6"
												src={tech.icon}
												alt={tech.name}
											/>
										</div>

										<div>
											<p className="font-pjs font-bold text-[16px] text-[#0F172A]">
												{tech.name}
											</p>
											<p className="font-pjs font-bold text-[10px] text-[#94A3B8]">
												{tech.category}
											</p>
										</div>
									</div>
									<button
										className="cursor-pointer"
										onClick={() =>
											onRemoveFromStack(tech.id)
										}
									>
										<RxCross2 className="w-4 h-4" />
									</button>
								</div>
							</div>
						))}
						{selectedStack.length > 0 && (
							<button
								onClick={onClearAll}
								className="btn btn-outline btn-error mt-12 w-full"
							>
								Clear All
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default SelectedStack;
