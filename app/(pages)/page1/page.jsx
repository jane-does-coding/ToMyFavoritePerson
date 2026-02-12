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
						<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] h-[25vh] w-2/7"></div>
						<div className="flex flex-col w-3/7 px-[1vw] items-start justify-center gap-[0.5vh]">
							<h2 className="sugar underline italic text-[2.5vh]">
								Lorem Ipsum
							</h2>
							<p className="font-extralight text-[1.75vh]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								consectetur fugiat laborum expedita amet recusandae? Lorem ipsum
								dolor, sit amet consectetur adipisicing elit. Explicabo, facere!
							</p>
						</div>
						<div className="w-2/7 flex flex-col items-center justify-between">
							<p className="font-extralight text-[1.75vh]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<div className="w-full bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] h-[15vh]"></div>
						</div>
					</div>
					<div className="flex bg-blue-300/0 gap-[1vw]">
						<div className="flex flex-col w-2/5">
							<h2 className="sugar underline italic text-[2.5vh]">
								Lorem Ipsum
							</h2>
							<p className="font-extralight text-[1.75vh]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								consectetur fugiat laborum expedita amet recusandae? Lorem ipsum
								dolor, sit amet consectetur adipisicing elit. Explicabo, facere!
							</p>
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-full mt-[0.5vh]"></div>
						</div>
						<div className="flex flex-col w-3/5">
							<h2 className="sugar underline italic text-[2.5vh] text-right">
								Lorem Ipsum
							</h2>
							<p className="font-extralight text-[1.75vh]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								consectetur fugiat laborum expedita amet recusandae? Lorem ipsum
								dolor, sit amet consectetur adipisicing elit. Explicabo, facere!
							</p>
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-[20vh]"></div>
						</div>
					</div>
					<p className="text-center italic font-extrabold sugar mt-[2vh] py-[2vh] px-[1vw] rounded-[2vh] border-4 border-pink-900 text-[2vh]">
						Some more text here! Lorem ipsum dolor sit amet.
					</p>
				</div>
				<div className="flex flex-col bg-green-300/0 w-1/2">
					<div className="border-y-4 border-pink-900 py-[0.5vh]">
						<h1 className="sugar leading-[4.5vh] pb-[1vh] text-center uppercase text-[4.5vh] py-[2vh] border-y-2 border-pink-900">
							I'm Very Grateful
						</h1>
					</div>
					<p className="font-semibold italic sugar text-center py-[1vh] pb-[0.5vh] text-[2vh] border-b-2 border-pink-900">
						For all the time that we've spent together
					</p>
					<div className="flex py-[1.5vh]"></div>
					<div className="flex bg-blue-300/0 gap-[1vw]">
						<div className="flex flex-col items-start justify-between w-4/7 py-[1vh]">
							<h2 className="sugar underline italic text-[2.5vh]">
								Lorem Ipsum
							</h2>
							<p className="font-extralight text-[1.75vh]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								consectetur fugiat laborum expedita amet recusandae? Lorem ipsum
								dolor, sit amet consectetur adipisicing elit. Explicabo, facere!
							</p>
							<p className="font-extralight text-[1.75vh]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								consectetur fugiat laborum expedita amet recusandae? Lorem ipsum
								dolor, sit amet consectetur adipisicing elit. Doloremque, iste?
							</p>
						</div>
						<div className="flex flex-col w-3/7">
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-[35vh]"></div>
						</div>
					</div>
					<p className="text-center italic font-extrabold sugar mt-[2vh] py-[0.5vh] px-[1vw] rounded-[1.75vh] border-4 border-pink-900 text-[2vh]">
						Some more text here! Lorem ipsum dolor sit amet.
					</p>
					<div className="flex bg-blue-300/0 gap-[1vw] pt-[2vh]">
						<div className="flex flex-col w-4/7">
							<div className="bg-pink-100/70 border-2 border-pink-900 rounded-[2vh] w-full h-full"></div>
						</div>
						<div className="flex flex-col items-start justify-between w-3/7 py-[0.5vh]">
							<h2 className="sugar underline italic text-[2.5vh]">
								Lorem Ipsum
							</h2>
							<p className="font-extralight text-[1.75vh]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
								consectetur fugiat laborum expedita amet recusandae? Lorem ipsum
								dolor, sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
