import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const name = "Adepitan";

function Hero() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index >= name.length) {
      setDone(true);
      return;
    }

    const timeout = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, 900);

    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <section className="custom-container pt-10 px-4 sm:px-6 md:px-8 lg:px-16 relative ">
      <header className="flex flex-col items-center md:flex-row md:justify-between">
        <h3 className="text-[24px] sm:text-[24px] font-bold text-white mb-4 md:mb-0">
          Adepitan Adetunji
        </h3>

        <div className="flex gap-6 md:gap-8 lg:gap-10">
          <a
            href="https://github.com/Masterpitan"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-6 h-6 group cursor-pointer"
          >
            <img
              src="/svg/github-normal.svg"
              alt="github"
              className="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <img
              src="/svg/github-active.svg"
              alt="github"
              className="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </a>
          <a
            href="http://www.linkedin.com/in/adetunji-adepitan"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-6 h-6 group cursor-pointer"
          >
            <img
              src="/svg/linkedin-normal.svg"
              alt="linkedin"
              className="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <img
              src="/svg/linkedin-active.svg"
              alt="linkedin"
              className="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </a>
        </div>
      </header>

      <div className="mt-12 md:mt-20 lg:mt-24 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[32px] leading-tight sm:text-[32px] md:text-[32px] lg:text-[55px] xl:text-2xl lg:leading-tight font-bold text-white relative w-full max-w-full md:max-w-[500px] lg:max-w-[900px]">
            <span className="block">Nice to meet you!</span>
            <span>I am</span>{" "}
            <span className="relative z-10 inline-block">
              {name
                .slice(0, index)
                .split("")
                .map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {char}
                  </motion.span>
                ))}

              {!done && (
                <motion.span
                  key="cursor"
                  className="ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  |
                </motion.span>
              )}
            </span>
            <span
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[6px] bg-green-500 z-[-1]
                           w-[180px] 
                           md:left-auto md:right-0 -right-10 md:transform-none md:w-[240px] md:top-[calc(100% - 10px)]
                           lg:-right-30 lg:w-[400px] lg:top-[calc(100% - 10px)]"
            />
          </h1>

          <p className="mt-6 md:mt-7 lg:mt-11 text-[16px] md:text-md text-white max-w-[300px] sm:max-w-[400px] md:max-w-[445px] md:tracking-wide">
            Adept AWS Solutions Architect Associate with hands-on experience in
            designing and deploying scalable cloud architectures. Proficient in
            CI/CD Pipelines and DevOps practices.
          </p>

          <div className="mt-8 md:mt-10">
            <a
              href="#contact"
              className="uppercase text-[18px] hover:text-green-500 ease-in-out transition-all duration-500 text-white font-bold"
            >
              Contact me
            </a>
            <div className="bg-green-500 h-[2px] max-w-[130px] mt-3 mx-auto md:mx-0" />
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end w-full md:w-auto">
          <div
            className="relative bg-dark-500 h-[400px] w-[250px] 
                          sm:h-[480px] sm:w-[280px]
                          md:h-[600px] md:w-[380px]
                          lg:h-[720px] lg:w-[445px]
                          flex items-end z-[-1]"
          >
            <img
              src="/imgs/adepitan.png"
              alt="adepitan"
              className="h-[400px] object-cover mx-auto
                         sm:h-[480px]
                         md:h-[600px]
                         lg:h-[1000px] lg:mt-[-280px] object-top"
            />
            <img
              src="/svg/single-ring.svg"
              alt="ring"
              className="absolute -left-5 bottom-5 sm:-left-10 sm:bottom-10 md:-left-10 md:bottom-10"
            />
          </div>
        </div>
      </div>

      <img
        src="/svg/multi-rings.svg"
        alt="ring"
        className="absolute -left-[100%] top-20 w-[600px] pointer-events-none z-[-1]
                   sm:-left-[80%] sm:top-24 sm:w-[700px]
                   md:-left-[60%] md:top-32 md:w-[750px]
                   lg:-left-[50%] lg:top-36 lg:w-[830px]"
      />
    </section>
  );
}

export default Hero;
