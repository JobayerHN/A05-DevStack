import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
	return (
		<div className="pt-8 lg:pt-35 px-4">
			<div className="container m-auto flex flex-col justify-center md:flex-row md:justify-between lg:flex-row lg:justify-between items-center">
				<div className="text-center lg:text-left">
					<h1 className="pb-3 md:pb-6 lg:pb-6 inter font-extrabold text-center md:text-left lg:text-left text-3xl md:text-6xl lg:text-6xl max-w-70 mx-auto md:mx-0 md:max-w-140	lg:max-w-140">
						Build Your Ideal{" "}
						<span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
							Development Stack
						</span>
					</h1>
					<p className="pb-10 max-w-87.5 md:max-w-133 lg:max-w-133 font-pjs font-normal leading-7 text-[14px] md:text-lg lg:text-lg text-[#475569] mx-auto md:mx-0">
						Explore frontend, backend, database, and tooling
						options, compare them side by side, and put together the
						stack that fits your next project.
					</p>
					<div className="flex gap-3 justify-center lg:justify-start item-center">
						<button className=" bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-medium px-6 py-3 rounded-xl border-none cursor-pointer  active:translate-y-0.5 transition-all hover:brightness-95 hover:bg-gray-100 inter text-[12px] md:text-[14px] lg:text=[14px]">
							Explore Technologies
						</button>
						<button className=" border border-[#E5E7EB] inter font-medium px-12 py-3 rounded-xl cursor-pointer  active:translate-y-0.5 transition-all hover:bg-gray-100 text-[#374151] text-[12px] md:text-[14px] lg:text=[14px]">
							Learn More
						</button>
					</div>
				</div>
				<div className="mt-3 lg:mt-0">
					<img src={bannerImg} alt="Banner Stack" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
