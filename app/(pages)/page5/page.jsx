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
			<a href="/page4" className="absolute top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}

			<p className="sugar text-[5vh] w-[50vw] left-[50vw] translate-x-[-50%] absolute top-[15vh] text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque saepe
				commodi autem, quidem sit maxime ipsum. Nulla, nobis aspernatur dolor
				iusto assumenda at sunt.
			</p>
			<div className="absolute top-[50vh] left-[50vw] translate-x-[-50%] z-99">
				<Button text={"Please be my Valentine"} />
			</div>
			<div className="flex gap-[2vw] w-[90vw] absolute top-[45vh] left-[50vw] translate-x-[-50%]">
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw]"></div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] mt-[20vh]"></div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] mt-[25vh]"></div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] mt-[20vh]"></div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw]"></div>
			</div>
		</div>
	);
};

export default Page;
