// import React from "react";

const Nav = () => {
	return (
		<nav>
			<div className="container flex justify-between m-auto items-center py-7.5">
				<div className="">
					<a href="">
						<img src="/public/logo-text.png" alt="" />
					</a>
				</div>
				<ul className="flex gap-7 roboto f-regular">
					<li>
						<a
							className="font-pjs font-medium text-[#DB2777] text-sm leading-tight"
							href=""
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="font-pjs font-medium text-[#475569] text-sm leading-tight"
							href=""
						>
							Technologies
						</a>
					</li>
					<li>
						<a
							className="font-pjs font-medium text-[#475569] text-sm leading-tight"
							href=""
						>
							Projects
						</a>
					</li>
					<li>
						<a
							className="font-pjs font-medium text-[#475569] text-sm leading-tight"
							href=""
						>
							About
						</a>
					</li>
					<li>
						<a
							className="font-pjs font-medium text-[#475569] text-sm leading-tight"
							href=""
						>
							Contact
						</a>
					</li>
				</ul>
				<div>
					<button className="btn btn-ghost rounded-full font-pjs font-medium text-[#334155] text-sm leading-tight">
						Sign In
					</button>
					<button className="btn bg-[#D91B7E] hover:brightness-85 transition-all  border-none rounded-full text-white font-pjs font-semibold leading-tight text-sm">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
