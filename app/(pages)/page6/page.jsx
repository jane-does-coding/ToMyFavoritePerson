import Button from "@/app/components/Button";
import React from "react";

const Page = () => {
	return (
		<div className="relative h-screen w-full">
			{/* Background image */}
			<img
				src="/imgs/bg.jpg"
				alt="Background board"
				className="fixed w-full h-full object-cover -z-10"
			/>

			{/* Back button */}
			<a href="/page5" className="fixed top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}
			<a href="/page7" className="fixed top-[2vh] right-[2vw] z-99">
				<Button text={"Continue"} />
			</a>

			<h1 className="absolute top-[8vh] left-[50%] translate-x-[-50%] sugar text-[7vh] font-extralight mx-auto text-center min-w-fit w-[90vw]">
				Some of the dates that matter
			</h1>
			<h2 className="absolute top-[20vh] left-[50%] translate-x-[-50%] sugar text-[3vh] font-extralight mx-auto text-center min-w-fit w-[90vw]">
				Because I value them all
			</h2>
			<div className="bg-pink-200 border-2 border-black top-[30vh] left-[10vw] rounded-[2vh] absolute overflow-hidden min-w-[15vw] w-[80vw]">
				<div className="flex w-full border-b-2 border-black">
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar border-r-2">
						Date
					</h2>
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar bg-pink-100">
						Some Event
					</h2>
				</div>
				<div className="flex w-full border-b-2 border-black">
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar border-r-2">
						Date
					</h2>
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar bg-pink-100">
						Some Event
					</h2>
				</div>
				<div className="flex w-full border-b-2 border-black">
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar border-r-2">
						Date
					</h2>
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar bg-pink-100">
						Some Event
					</h2>
				</div>
				<div className="flex w-full">
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar border-r-2">
						Date
					</h2>
					<h2 className="w-1/2 py-[2vh] px-[2vw] text-[2.5vh] sugar bg-pink-100">
						Some Event
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Page;
