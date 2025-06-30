interface ISkills {
  id: string;
  tag: string;
}

const skills: ISkills[] = [
  {
    id: "1",
    tag: "Linux",
  },
  {
    id: "2",
    tag: "Python",
  },
  {
    id: "3",
    tag: "Terraform",
  },
  {
    id: "4",
    tag: "AWS",
  },
  {
    id: "5",
    tag: "CI/CD",
  },
  {
    id: "6",
    tag: "Docker",
  },
  {
    id: "7",
    tag: "AWS AI/ML",
  },
  {
    id: "8",
    tag: "Kubernetes",
  },
];

function Skills() {
  return (
    <section className="lg:mt-40 md:mt-15 mt-10  relative lg:px-8 md:px-10 overflow-hidden">
      <div className="lg:max-w-[1110px] max-w-[90%] mx-auto ">
        <div className="bg-dark-200 w-full h-[2px]" />

        <div className="grid lg:grid-cols-4 justify-items-center gap-y-3 md:justify-start grid-cols-2 md:grid-cols-3 lg:gap-x-8 md:gap-x-6 gap-x-4 lg:mt-8 mt-6">
          {skills?.map(item => {
            return (
              <div key={item?.id}>
                <h4 className="lg:text-xl font-semibold md:text-lg text-md text-white">
                  {item?.tag}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      <img
        src="/public/svg/multi-rings.svg"
        alt="ring"
        className="-right-[20%] bottom-10 absolute w-[830px]"
      />
    </section>
  );
}

export default Skills;
