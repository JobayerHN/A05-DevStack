import React from "react";

const SelectedStack = () => {
	return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<div className="">
				<h2 className="card-title">Your Stack</h2>
				<p className="mt-1 text-sm text-slate-400">
					No technologies selected yet.
				</p>
				<div className="mt-6 rounded-xl flex items-center justify-center border border-dashed border-slate-200 py-6 text-sm text-slate-400 font-pjs font-normal text-xs leading-4">
					Your stack is empty.
				</div>
			</div>
		</div>
	);
};

export default SelectedStack;
