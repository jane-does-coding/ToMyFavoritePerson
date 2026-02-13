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
			<a href="/page2" className="absolute top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}
			<a href="/page4" className="absolute top-[2vh] right-[2vw] z-99">
				<Button text={"Continue"} />
			</a>

			<div className="sugar text-[30vh] top-[55vh] left-[51vw] translate-x-[-50%] translate-y-[-50%] absolute leading-[30vh]">
				<h1 className="text-[15vh] leading-[15vh] absolute top-[-15vh] left-[-5vw]">
					The
				</h1>
				<h1>Photos</h1>
			</div>

			<div className="absolute top-[15vh] left-[3vw] w-[15vw] border-2 h-[20vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img8.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[40vh] left-[5vw] w-[10vw] border-2 h-[15vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img7.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[5vh] left-[20vw] w-[8.5vw] border-2 h-[15vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img13.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[5vh] left-[40vw] w-[20vw] border-2 h-[20vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img4.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[10vh] left-[65vw] w-[17.5vw] border-2 h-[27.5vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img10.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[40vh] left-[85vw] w-[10vw] border-2 h-[15vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img11.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[65vh] left-[3vw] w-[30vw] border-2 h-[25vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img9.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[72.5vh] left-[40vw] w-[20vw] border-2 h-[25vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img14.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[65vh] left-[70vw] w-[20vw] border-2 h-[25vh] bg-pink-100 rounded-[2vh] overflow-hidden">
				<img
					src="/imgs2/img12.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Page;
