function About() {
  const skills = ["HTML", "CSS", "Learning Javascript", "C language", "C++"];

  return (
    <div
      className="about px-7 py-20 flex flex-col items-center justify-center max-w-7xl mx-auto"
      id="about"
    >
      <h2 className="about-heading flex items-center w-full mb-20 whitespace-nowrap leading-[1.1] font-bold text-slate-300 text-step-5">
        About Me
      </h2>
      <div className="content__container flex gap-12 flex-col sm:flex-row">
        <div className="content__left">
          <div className="content__aboutme">
            <p className="font-semibold">
              Hello!My name is Anshul Baliga, but you can call me Bali. I&apos;m
              a sophomore student at the Department of Computer Science, PESU.I
              really like understanding stuff at a very intuitive level, so much
              so that I could boil any idea down to some very easy to grasp
              thoughts. I always try my best to implement that in everything I
              learn, although it is quite difficult sometimes. At the moment I
              do not have any particular academic interests, still in the
              process of exploring everything that is out there.
            </p>
            <p className="mt-4 font-semibold">
              Some things I have really enjoyed learning are Automata Theory in
              Computer Science, The Special Theory of Relativity and Graph
              Theory. When I&apos;m not being crushed by coursework, I like to
              spend time playing football, listening to music, playing the piano
              or gaming with my friends!
            </p>
          </div>

          <p className="font-bold mt-8">
            Here are some of the technologies I&apos;m familiar with :{" "}
          </p>
          <div className="content__technologies text-slate-300 grid grid-cols-2 mt-4">
            {skills.map((skill) => {
              return <p key={skill}>{skill}</p>;
            })}
          </div>
        </div>
      </div>
      {/* ends here */}
    </div>
  );
}

export default About;
