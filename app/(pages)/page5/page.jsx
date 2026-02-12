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
			<a href="/page4" className="fixed top-[2vh] left-[2vw] z-99">
				<Button text={"Go Back"} />
			</a>

			{/* Continue button */}
			<a href="/page6" className="fixed top-[2vh] right-[2vw] z-99">
				<Button text={"Continue"} />
			</a>

			<h1 className="absolute top-[8vh] left-[50%] translate-x-[-50%] sugar text-[7vh] font-extralight mx-auto text-center min-w-fit w-[90vw]">
				All I think and thought about you...
			</h1>
			<h2 className="absolute top-[20vh] left-[50%] translate-x-[-50%] sugar text-[3vh] font-extralight mx-auto text-center min-w-fit w-[90vw]">
				{"(Reducted for the Flagship reviewer)"}
			</h2>
			<div className="columns-3 w-[90vw] top-[30vh] absolute left-[50vw] translate-x-[-50%] gap-[2vw] space-y-[2vh] pb-[5vh]">
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem, ipsum
						dolor sit amet consectetur adipisicing elit. Ipsum iste quas
						dignissimos corporis eius sit porro non? Sequi iste quasi quaerat
						perferendis rerum beatae exercitationem ut reiciendis ex quo! Esse!
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem, ipsum
						dolor sit amet consectetur adipisicing elit. Ipsum iste quas
						dignissimos corporis eius sit porro non? Sequi iste quasi quaerat
						perferendis rerum beatae exercitationem ut reiciendis ex quo! Esse!
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem, ipsum
						dolor sit amet consectetur adipisicing elit. Ipsum iste quas
						dignissimos corporis eius sit porro non?
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem, ipsum
						dolor sit amet consectetur adipisicing elit. Ipsum iste quas
						dignissimos corporis eius sit porro non? Sequi iste quasi quaerat
						perferendis rerum beatae exercitationem ut reiciendis ex quo! Esse!
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
						rerum harum dolore sunt ratione libero, recusandae molestiae
						similique cum ullam modi totam at reprehenderit temporibus sapiente
						dolor iusto quidem ducimus.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Odit nulla iure
						suscipit quos neque placeat tempore perspiciatis expedita. Quas
						cumque quaerat obcaecati deserunt sunt commodi, nesciunt
						necessitatibus aliquam similique nemo, voluptatem culpa maiores
						repudiandae eveniet nam! Possimus reprehenderit nostrum aperiam!
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Odit nulla iure
						suscipit quos neque placeat tempore perspiciatis expedita. Quas
						cumque quaerat obcaecati deserunt sunt commodi, nesciunt
						necessitatibus aliquam similique nemo, voluptatem culpa maiores
						repudiandae eveniet nam! Possimus reprehenderit nostrum aperiam!
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
						minus nesciunt repudiandae sed ex tempore quos fuga saepe nobis
						dolor.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem, ipsum
						dolor sit amet consectetur adipisicing elit. Ipsum iste quas
						dignissimos corporis eius sit porro non? Sequi iste quasi quaerat
						perferendis rerum beatae exercitationem ut reiciendis ex quo! Esse!
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
						rerum harum dolore sunt ratione libero, recusandae molestiae
						similique cum ullam modi totam at reprehenderit temporibus sapiente
						dolor iusto quidem ducimus.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Odit nulla iure
						suscipit quos neque placeat tempore perspiciatis expedita. Quas
						cumque quaerat obcaecati deserunt sunt commodi, nesciunt
						necessitatibus aliquam similique nemo, voluptatem culpa maiores
						repudiandae eveniet nam! Possimus reprehenderit nostrum aperiam!
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						sunt facilis molestias aspernatur quis repellendus. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Odit nulla iure
						suscipit quos neque placeat tempore perspiciatis expedita. Quas
						cumque quaerat obcaecati deserunt sunt commodi, nesciunt
						necessitatibus aliquam similique nemo, voluptatem culpa maiores
						repudiandae eveniet nam! Possimus reprehenderit nostrum aperiam!
					</p>
				</div>
			</div>
			{/* <div className="columns-3 w-[90vw] top-[25vh] absolute left-[50vw] translate-x-[-50%] gap-[2vw] space-y-[2vh] pb-[5vh]">
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 10, 2025</p>
					<p className="text-[2vh] font-light">
						Yesterday was my birthday, and I've turned 17. It was a first
						birthday that I got to celebrate with a valuable person to me, that
						isn't a family member. I never celebrated my birthdays with friends,
						I never thought of them as being important enough or my birthday to
						share. It was a first time that I got to share my birthday with
						someone who isn't a family, but yet still so close to me. My
						birthdays aren't important to me, so I don't like getting together
						with people to celebrate it, but yet, I wanted to see you on that
						day. It wasn't because my birthday became important to me, but
						because a person that used to be a stranger to me, became important
						to me, and I know I'm important to them, and it was a whole new
						feeling.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">December 15, 2025</p>
					<p className="text-[2vh] font-light">
						Yesterday Ethan confessed to me that he loves me, I really don't
						know how to feel about it yet, but what I do know is that I'm not
						against it. And if Im not against it, that means I do have feelings,
						but it is so hard to tell what I feel and how I should react to it.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 14, 2025</p>
					<p className="text-[2vh] font-light">
						Me, and my favorite person, who's also my boyfriend, Ethan, finally
						got to hangout, after a bit of not being able to. And since prom is
						relatively soon, I don't think we would be able to hangout again for
						a long while before/after it. While I'm excited for prom, we would
						be hanging out in a group, and it would be weird to be affectionate
						in a group, so I'm already starting to miss the one-on-one time,
						because we wont have that for a bit. I really want to always be all
						over him, I want to always hold hands, and hug him, and kiss him,
						and just be close to him, when I'm with him, I just feel like I'm
						going to explode from affection, and I neeeeeed to be close with
						that person. I love spending time with him, it doesn't really matter
						to me, at all, what we do, or where we are spending time, I just
						love being with him. I love how whenever we see each other, we
						always kiss and hug, and I never want to let go of that, and when we
						say goodbye after hanging out, I want to hug him longer, and hope it
						lasts forever.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">April 21, 2025</p>
					<p className="text-[2vh] font-light">
						Few days ago, I went to prom with my wonderful boyfriend, and I
						actually had a great time. I was very stressed before that, thinking
						I would mess up with something or be left out, or even worse - be
						cold. However, because I was there with my favorite person,
						everything was so wonderful! He looked so handsome the whole time,
						and was always so nice to me, I love him so much. We were there with
						a group, and even though I saw most people there only like twice, I
						was very comfortable around everyone, mostly because my boyfriend
						was there, so I was really happy. I'm very grateful to have my
						boyfriend in my life, and I'm very grateful to have had such a
						wonderful time at prom with him. I hope we can go to prom next year
						together too. I definently did not think it would be fun at all, but
						it ended up being great. That day made me fall in love with him all
						over again, because I got to experience such wonderful day, because
						of him, and with him. The most time we got to spend together one on
						one, was when we were driving back, and we were waiting for the
						traffic light to turn red, so we could kiss. It was way late, and
						dark, and we were driving back, and it was most time we got alone.
						And after spending so much time together, yet couldn't be alone, we
						were so desperate for a kiss. At the traffic light, when it turned
						red, he grabbed me by the back of my head/neck and pulled me in for
						a kiss, it was dark with red traffic light shinning while we were
						kissing. Oh, that must of been the most beautiful feeling ever.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">August 30, 2025</p>
					<p className="text-[2vh] font-light">
						People always say "it's your first relationship" and "you are too
						young" and that my relationship won't last. And who knows, maybe
						they are right, but I want to believe otherwise. Every phase of this
						relationship is great and good while it lasts. Not everything is
						perfect, and it doesn't have to be. It's not perfect and that's what
						creates love. Being with each other while not everything is perfect.
						"the perfect" doesn't exist, it is what all the imperfections create
						together. Not everything is perfect, but I am dating an amazgin
						person, who I truly value. He always listens to me, and has
						something nice to say, and doesn't make me feel like I have to shut
						up and that I talk to much. Always since I was a kid, I was told
						that I talk too much, but I just have a lot to share and say. And it
						feels like he's the first person who doesn't make me feel bad for
						that, and actually listens to me, and values what I say, and always
						has soemthing nice to say, making it seem interested in what I say,
						which is incredibly important, since if someone cares about what I
						say, it makes me happy. When I talk, I talk about what I care about,
						and when someone cares about what I care about, it makes me feel
						like they care about me, and that is a very important part of love
						for me.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">March 16, 2025</p>
					<p className="text-[2vh] font-light">
						I'm really grateful to have such an amazing and wonderful boyfriend,
						he's everything I could ever wish for, and my parents who are
						usually strict, don't mind me being with him. He always cares about
						me, I get to talk with him as much as I want with him. I would never
						want to lose him. We've only been together for few months as of now,
						but I want this to last forever. And forever, is a strong word, and
						the word used to scare me, but if I get to spend forever with him,
						it brings me some peace. In my whole life, having a wonderful person
						with me, forever, is something nothing can replace, and I want to
						have that with him.
					</p>
				</div>
				<div className="w-full bg-white p-[2vh] py-[2.25vh] rounded-[1vh] break-inside-avoid">
					<p className="sugar font-semibold text-[2vh]">Fall, 2025</p>
					<p className="text-[2vh] font-light">
						There were so many different phases of this relationship, and not
						all of them were plesant. However, what we have right now, is so far
						my favorite. We often get to go to your house and watch anime
						together. It doesn't matter to me what we watch, what matters is
						that we are spending so much time together, it is 3-4 times a week
						that we get to hangout, and this is the most wonderful thing that
						has happened to me. We get to be so close to each other the whole
						time, I do think that it could be more fun, we could go for walks or
						just hangout somewhere, rather than staying in. However, it is my
						favorite phase we've had, since I get to spend so much time, and I
						can't be any happier.
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default Page;
