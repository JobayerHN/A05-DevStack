import logoImg from "../assets/logo-text.png";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 bg-white">
			<div className="container mx-auto flex items-center justify-between py-4 px-4">
				<div className="md:hidden">
					<button
						popoverTarget="mobile-menu-popover"
						className="menu-btn btn btn-ghost btn-circle"
						aria-label="Toggle Menu"
					>
						<svg
							className="w-7 h-7 fill-current text-gray-700"
							viewBox="0 0 512 512"
						>
							<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
						</svg>
					</button>

					<div
						id="mobile-menu-popover"
						popover="auto"
						className="mobile-popover border border-gray-100 shadow-xl rounded-2xl p-3 w-52 bg-white"
					>
						<ul className="flex flex-col gap-2 font-pjs font-medium text-gray-700 text-sm">
							<li>
								<a
									href=""
									className="block p-2 rounded-lg hover:bg-pink-50 hover:text-[#DB2777]"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href=""
									className="block p-2 rounded-lg hover:bg-pink-50 hover:text-[#DB2777]"
								>
									Technologies
								</a>
							</li>
							<li>
								<a
									href=""
									className="block p-2 rounded-lg hover:bg-pink-50 hover:text-[#DB2777]"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href=""
									className="block p-2 rounded-lg hover:bg-pink-50 hover:text-[#DB2777]"
								>
									About
								</a>
							</li>
							<li>
								<a
									href=""
									className="block p-2 rounded-lg hover:bg-pink-50 hover:text-[#DB2777]"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div>
					<a href="#">
						<img
							src={logoImg}
							alt="Logo"
							className="h-8 w-auto object-contain"
						/>
					</a>
				</div>

				<ul className="hidden md:flex gap-7 font-pjs font-medium text-sm leading-tight">
					<li>
						<a
							className="text-[#DB2777]  hover:text-[#FF5722] transition-colors"
							href=""
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="text-[#475569] hover:text-[#FF5722] transition-colors"
							href=""
						>
							Technologies
						</a>
					</li>
					<li>
						<a
							className="text-[#475569] hover:text-[#FF5722] transition-colors"
							href=""
						>
							Projects
						</a>
					</li>
					<li>
						<a
							className="text-[#475569] hover:text-[#FF5722] transition-colors"
							href=""
						>
							About
						</a>
					</li>
					<li>
						<a
							className="text-[#475569] hover:text-[#FF5722] transition-colors"
							href=""
						>
							Contact
						</a>
					</li>
				</ul>

				<div className="flex items-center gap-2">
					<button className="btn btn-ghost rounded-full font-pjs font-medium text-[#334155] text-sm leading-tight px-4">
						Sign In
					</button>
					<button className="btn bg-[#D91B7E] hover:brightness-85 transition-all border-none rounded-full text-white font-pjs font-semibold leading-tight text-sm px-5">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
