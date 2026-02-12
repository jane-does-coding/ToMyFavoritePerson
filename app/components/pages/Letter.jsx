import React from "react";
import Button from "../Button";

const Letter = () => {
	return (
		<div className="h-screen w-full overflow-hidden overflow-y-hidden">
			<img src="/imgs/bg.jpg" className="w-full h-screen object-cover z-[-1]" />
			<h1 className="absolute top-[6vh] left-[50%] translate-x-[-50%] sugar text-[10vh] font-extralight mx-auto text-center w-fit">
				You got a letter...
			</h1>
			<p className="absolute bottom-[32vh] z-99 sugar text-[3vh] font-extralight left-[50%] translate-x-[-50%] w-[50vw] bg-blue-300/0 leading-[5.5vh]">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae
				quo totam sunt molestiae aut aliquam atque ipsam non rem. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Beatae dolore autem minima
				nobis neque officia. Lorem ipsum dolor sit amet.
			</p>

			<a
				href="/page1"
				className="absolute bottom-[22.5vh] left-[50vw] translate-x-[-50%] z-99"
			>
				<Button text={"Continue"} />
			</a>

			<img
				src="/imgs/envelope-hearts-nobg.png"
				className="absolute bottom-0 z-0 left-[50%] translate-x-[-50%] w-[70vw] h-[80vh] drop-shadow-2xl"
			/>
		</div>
	);
};

export default Letter;
