// import React from "react";

const Banner = () => {
	return (
		<div className="pt-35 pb-11">
			<div className="container m-auto flex justify-between items-center">
				<div>
					<h1 className="pb-6 inter font-extrabold text-6xl max-w-140">
						Build Your Ideal{" "}
						<span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
							Development Stack
						</span>
					</h1>
					<p className="pb-10 max-w-133 font-pjs font-normal leading-7 text-lg text-[#475569]">
						Explore frontend, backend, database, and tooling
						options, compare them side by side, and put together the
						stack that fits your next project.
					</p>
					<div className="flex gap-3">
						<button className=" bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-medium px-6 py-3 rounded-xl border-none cursor-pointer  active:translate-y-0.5 transition-all hover:brightness-95 hover:bg-gray-100 inter">
							Explore Technologies
						</button>
						<button className=" border border-[#E5E7EB] inter font-medium px-12 py-3 rounded-xl cursor-pointer  active:translate-y-0.5 transition-all hover:bg-gray-100 text-[#374151]">
							Learn More
						</button>
					</div>
				</div>
				<div>
					<img src="/public/banner-stack.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
