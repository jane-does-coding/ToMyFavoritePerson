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
			<a href="/page6" className="absolute top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}

			<p className="sugar text-[5vh] w-[50vw] left-[50vw] translate-x-[-50%] absolute top-[10vh] text-center">
				I really value our friendship, and I want to keep it. I know we didnt
				agree on few things, but I think it wouldn't be smart to throw away the
				friend ship after one argument.
			</p>
			<div className="absolute top-[42.5vh] left-[39vw] translate-x-[-50%] z-99">
				<Button text={"Please forgive me"} />
			</div>
			<div className="absolute top-[42.5vh] left-[61vw] translate-x-[-50%] z-99">
				<Button text={"and be my Galentine"} />
			</div>
			<p className="absolute top-[52.5vh] sugar text-[3vh] underline left-[50vw] translate-x-[-50%]">
				{"(Lets go get sushi on Valentines, I can pay)"}
			</p>
			<p className="absolute top-[57.5vh] sugar text-[2.5vh] underline left-[50vw] translate-x-[-50%]">
				{"(Pretty Please)"}
			</p>
			<div className="flex gap-[2vw] w-[90vw] absolute top-[45vh] left-[50vw] translate-x-[-50%]">
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] overflow-hidden">
					<img
						src="/imgs/please1.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] mt-[20vh] overflow-hidden">
					<img
						src="/imgs/please2.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] mt-[25vh] overflow-hidden">
					<img
						src="/imgs/please3.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] mt-[20vh] overflow-hidden">
					<img
						src="/imgs/please4.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-pink-200 border-2 rounded-[2vh] h-[25vh] w-[25vw] overflow-hidden">
					<img
						src="/imgs/please5.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Page;
