"use client";
import React from "react";
import Button from "@/app/components/Button";

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
			<a href="/" className="absolute top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}
			<a href="/page2" className="absolute top-[2vh] right-[2vw] z-99">
				<Button text={"Continue"} />
			</a>

			<div className="absolute top-[5vh] left-[50vw] translate-x-[-50%] w-[80vw] h-[90vh] bg-white/70 flex px-[1vw] py-[2vh] gap-[5vw]">
				<div className="flex flex-col bg-green-300/0 w-1/2">
					<div className="border-y-4 border-pink-900 py-[0.5vh]">
						<h1 className="sugar leading-[4.5vh] pb-[1vh] text-center uppercase text-[4.5vh] py-[2vh] border-y-2 border-pink-900">
							Thank you for
						</h1>
					</div>
					<div className="flex py-[1.5vh]">
						<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] h-[25vh] w-2/7 overflow-hidden">
							<img
								src="/imgs2/img2.png"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col w-3/7 px-[1vw] items-start justify-center gap-[0.5vh]">
							<h2 className="sugar underline italic text-[2.5vh]">
								Making me laugh
							</h2>
							<p className="font-extralight text-[1.75vh]">
								When I'm with you, everything is just so much fun. I love how
								you can always make me laugh. It's been the most fun staying
								over, and staying up late with you, laughing about all there is.
							</p>
						</div>
						<div className="w-2/7 flex flex-col items-center justify-between">
							<p className="font-extralight text-[1.75vh]">
								{
									"You will be the reason why I'll have bad smile lines when I'm old :)"
								}
							</p>
							<div className="w-full bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] h-[15vh] overflow-hidden">
								<img
									src="/imgs2/img1.png"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="flex bg-blue-300/0 gap-[1vw]">
						<div className="flex flex-col w-2/5">
							<h2 className="sugar underline italic text-[2.5vh]">
								Being my Friend
							</h2>
							<p className="font-extralight text-[1.75vh]">
								Without any exaggeration, you've been the best friend I've ever
								had in my life. You've been there for me through everything, and
								I can't thank you enough.
							</p>
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-full mt-[0.5vh] overflow-hidden">
								<img
									src="/imgs2/img3.png"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col w-3/5 pt-[1vh]">
							<h2 className="sugar underline italic text-[2.5vh] text-right">
								Introducing me to Horror Movies
							</h2>
							<p className="font-extralight text-[1.75vh] pb-[1vh]">
								I loved to always watch horror movies with you. Before you I
								wasn't ever watching any, but when I met you I realized it was
								so fun to watch with someone. Especially when that someone is
								you.
							</p>
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-[20vh] overflow-hidden mt-[1vh]">
								<img
									src="/imgs2/img4.png"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
					<p className="text-center italic font-extrabold sugar mt-[2vh] py-[2vh] px-[1vw] rounded-[2vh] border-4 border-pink-900 text-[2vh]">
						I'm happy that you were (and hopefully will be) part of my life
					</p>
				</div>
				<div className="flex flex-col bg-green-300/0 w-1/2">
					<div className="border-y-4 border-pink-900 py-[0.5vh]">
						<h1 className="sugar leading-[4.5vh] pb-[1vh] text-center uppercase text-[4.5vh] py-[2vh] border-y-2 border-pink-900">
							I'm Very Grateful
						</h1>
					</div>
					<p className="font-semibold italic sugar text-center py-[1vh] pb-[0.5vh] text-[2vh] border-b-2 border-pink-900">
						For all the time that we've spent together...
					</p>
					<div className="flex py-[1.5vh]"></div>
					<div className="flex bg-blue-300/0 gap-[1vw]">
						<div className="flex flex-col items-start justify-between w-4/7 py-[1.5vh]">
							<h2 className="sugar underline italic text-[2.5vh]">
								...and for all the fun times
							</h2>
							<p className="font-extralight text-[1.75vh]">
								I love every moment we've been together and I'm grateful for all
								the memories that we've made. I hope that we will get a chance
								to make many more in the future.
							</p>
							<p className="font-extralight text-[1.75vh]">
								I remember and value all the time we've spent, from the very
								first time we met at school, and since then each time we've hung
								out. Each time we slept over or stayed up late. Each time we
								laugh, or see each other.
							</p>
						</div>
						<div className="flex flex-col w-3/7">
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-[35vh] overflow-hidden">
								<img
									src="/imgs2/img5.png"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
					<p className="text-center italic font-extrabold sugar mt-[2vh] py-[0.5vh] px-[1vw] rounded-[1.75vh] border-4 border-pink-900 text-[2vh]">
						{"I really want us to stay together <3"}
					</p>
					<div className="flex bg-blue-300/0 gap-[1vw] pt-[2vh]">
						<div className="flex flex-col w-4/7">
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-[25vh] overflow-hidden">
								<img
									src="/imgs2/img6.png"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col items-start justify-between w-3/7 py-[0.5vh]">
							<h2 className="sugar underline italic text-[2.5vh]">
								Long Calls
							</h2>
							<p className="font-extralight text-[1.75vh]">
								I'm grateful for the long calls we had, for each unplanned
								facetime, or spontanious calls. Every time made me happy, and
								you've always been the only person I actually loved calling, and
								wasn't trying to get out of calls with.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
