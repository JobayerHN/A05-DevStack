import logoImg from "../assets/logo-text.png";

const Footer = () => {
	return (
		<div className="w-full overflow-hidden">
			<div className="container m-auto pt-8 md:pt-16 lg:pt-16 pb-8 md:pb-12 lg:pb-12">
				<div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 pb-16 text-center lg:text-left">
					<div className="flex flex-col items-center lg:items-start gap-4 max-w-xs">
						<div>
							<a href="">
								<img
									src={logoImg}
									alt="Logo"
									className="mx-auto lg:mx-0"
								/>
							</a>
						</div>

						<p className="font-pjs font-normal text-xs text-[#64748B] leading-5 max-w-sm mx-auto lg:mx-0 lg:max-w-94.5">
							Curated tools, technologies, and resources for
							developers building modern software.
						</p>
						<ul className="social flex gap-4 font-pjs font-semibold text-xs text-[#475569] leading-4 text-center">
							<li>
								<a href="">GitHub</a>
							</li>
							<span className="text-gray-400 md:hidden lg:hidden">
								•
							</span>
							<li>
								<a href="">Twitter</a>
							</li>
							<span className="text-gray-400 md:hidden lg:hidden">
								•
							</span>
							<li>
								<a href="">LinkedIn</a>
							</li>
						</ul>
					</div>

					<div className="hidden lg:flex gap-16 xl:gap-28">
						<div>
							<p className="text-[#0F172A] font-pjs text-xs font-bold leading-4 tracking-[0.6px pb-4">
								PRODUCT
							</p>
							<ul>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										Home
									</a>
								</li>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										Technologies
									</a>
								</li>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										Projects
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="text-[#0F172A] font-pjs text-xs font-bold leading-4 tracking-[0.6px] pb-4">
								COMPANY
							</p>
							<ul>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										About
									</a>
								</li>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										Contact
									</a>
								</li>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										Careers
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="text-[#0F172A] font-pjs text-xs font-bold leading-4 tracking-[0.6px pb-4">
								LEGAL
							</p>
							<ul>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										className="text-[#64748B] font-normal font-pjs leading-4 text-xs"
										href=""
									>
										Terms of Service
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex justify-between px-5 md:px-0 lg:px-0">
					<p className="font-pjs font-normal text-xs text-[#94A3B8] leading-4">
						© 2026 Dev Stack. All rights reserved.
					</p>
					<ul className="flex gap-6 text-[#94A3B8] font-normal font-pjs leading-4 text-xs">
						<li>
							<a href="">Privacy</a>
						</li>
						<li>
							<a href="">Terms</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
