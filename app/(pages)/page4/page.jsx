import Button from "@/app/components/Button";
import React from "react";

const Page = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Background image */}
			<img
				src="/imgs/bg.jpg"
				alt="Background board"
				className="absolute w-full h-full object-cover -z-10"
			/>

			{/* Back button */}
			<a href="/page3" className="absolute top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}
			<a href="/page5" className="absolute top-[2vh] right-[2vw] z-99">
				<Button text={"Continue"} />
			</a>

			<h1 className="sugar text-[10vh] mx-auto text-center pt-[5vh]">
				What it's been like
			</h1>
			<h1 className="sugar text-[5vh] mx-auto text-center absolute bottom-[5vh] left-[50vw] translate-x-[-50%]">
				Photos in order
			</h1>

			<div className="absolute top-[55vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]">
				<div className="flex items-center justify-between w-[80vw] absolute top-[50%] translate-y-[-50%]">
					<div className="w-[2vw] h-[2vw] rounded-full border-2 border-black bg-pink-200 relative">
						<div className="w-[15vw] h-[25vh] rounded-[1vh] border-2 border-black bg-pink-50 absolute translate-x-[-7vw] translate-y-[-27.5vh]">
							<img
								src="/imgs2/img5.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="w-[2vw] h-[2vw] rounded-full border-2 border-black bg-pink-200">
						<div className="w-[15vw] h-[25vh] rounded-[1vh] border-2 border-black bg-pink-50 absolute translate-x-[-7vw] translate-y-[5vh]">
							<img
								src="/imgs2/img2.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="w-[2vw] h-[2vw] rounded-full border-2 border-black bg-pink-200">
						<div className="w-[15vw] h-[25vh] rounded-[1vh] border-2 border-black bg-pink-50 absolute translate-x-[-7vw] translate-y-[-27.5vh]">
							<img
								src="/imgs2/img3.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="w-[2vw] h-[2vw] rounded-full border-2 border-black bg-pink-200">
						<div className="w-[15vw] h-[25vh] rounded-[1vh] border-2 border-black bg-pink-50 absolute translate-x-[-7vw] translate-y-[5vh]">
							<img
								src="/imgs2/img11.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="w-[2vw] h-[2vw] rounded-full border-2 border-black bg-pink-200">
						<div className="w-[15vw] h-[25vh] rounded-[1vh] border-2 border-black bg-pink-50 absolute translate-x-[-7vw] translate-y-[-27.5vh]">
							<img
								src="/imgs2/img13.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="w-[2vw] h-[2vw] rounded-full border-2 border-black bg-pink-200">
						<div className="w-[15vw] h-[25vh] rounded-[1vh] border-2 border-black bg-pink-50 absolute translate-x-[-7vw] translate-y-[5vh]">
							<img
								src="/imgs2/img12.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="w-[80vw] h-[1vh] bg-pink-200 border-2 border-black rounded-full"></div>
			</div>
		</div>
	);
};

export default Page;
