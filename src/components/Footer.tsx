// import React from 'react';

const Footer = () => {
	return (
		<div>
			<div className="container m-auto pt-16 pb-12">
				<div className="flex gap-30 pb-22.5">
					<div className="flex flex-col gap-3">
						<div>
							<a href="">
								<img src="/public/logo-text.png" alt="" />
							</a>
						</div>

						<p className="font-pjs font-normal text-xs text-[#64748B] leading-5 max-w-94.5">
							Curated tools, technologies, and resources for
							developers building modern software.
						</p>
						<div className="social flex gap-4 font-pjs font-semibold text-xs text-[#475569] leading-4">
							<a href="">GitHub</a>
							<a href="">Twitter</a>
							<a href="">LinkedIn</a>
						</div>
					</div>

					<div className="flex gap-46">
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
				<div className="flex justify-between">
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
