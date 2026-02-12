const Button = ({ text, link }) => {
	return (
		<button className={`relative pr-[0.5vw] pb-[0.9vh] group cursor-pointer`}>
			{/* shadow */}
			<span className="absolute rounded-[1vh] inset-0 bg-black z-0 w-[95%] h-[90%] mt-auto ml-auto"></span>

			{/* button face */}
			<span className="relative bg-pink-200 rounded-[1vh] text-[4vh] sugar px-[1.75vw] py-0 z-10 inline-block group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.5vh] transition-all ease-in-out">
				{text}
			</span>
		</button>
	);
};

export default Button;
