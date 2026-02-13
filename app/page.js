import Letter from "./components/pages/Letter";

export default function Home() {
	return (
		<div>
			{/* Laptop view */}
			<div className="hidden md:block md:absolute top-0 left-0 w-full">
				<Letter />
			</div>

			{/* Mobile view */}
			<div className="flex md:hidden h-screen w-screen items-center justify-center text-center px-6">
				{/* Background image */}
				<img
					src="/imgs/bg.jpg"
					alt="Background board"
					className="absolute w-full h-full object-cover -z-10"
				/>
				<p className="text-[3vh] sugar">Please view this on a laptop</p>
			</div>
		</div>
	);
}
