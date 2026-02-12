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
			<a href="/page1" className="absolute top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}
			<a href="/page3" className="absolute top-[2vh] right-[2vw] z-99">
				<Button text={"Continue"} />
			</a>

			<div className="flex flex-col absolute top-[17.5vh] left-[7.5vw] z-99 gap-[1vh]">
				<h2 className="sugar text-[12vh] leading-[14vh]">You Belong</h2>
				<h2 className="sugar text-[12vh] leading-[14vh]">in my</h2>
				<h2 className="sugar text-[12vh] leading-[14vh]">Heart</h2>
			</div>

			<div className="flex flex-col absolute top-[17.5vh] right-[7.5vw] z-99 items-end justify-center">
				<p className="text-right text-[3vh] sugar font-extralight max-w-[27.5vw]">
					You belong in a special place in my heart. You aren't just another
					friend I had, but you are a very special person to me.
				</p>
				<p className="text-right text-[3vh] sugar font-extralight max-w-[20vw]">
					Out of all the friends I've had in my life, which come and go, some
					were close, some were not, but you are my favorite.
				</p>
				<p className="text-right text-[3vh] sugar font-extralight max-w-[12.5vw]">
					And I want to stay friends with you.
				</p>
			</div>

			<img
				src="/imgs/locket2.png"
				className="w-[50vw] absolute z-99 top-0 left-[50vw] translate-x-[-50%]"
				alt=""
			/>
			<img
				src="/imgs/envelope-red.png"
				className="w-[40vw] absolute z-97 bottom-0 left-[50vw] translate-x-[-50%]"
				alt=""
			/>
		</div>
	);
};

export default Page;
