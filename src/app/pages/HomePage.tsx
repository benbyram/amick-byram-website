import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import imgHeadshot from "figma:asset/ce1ad8d38ea8f5cef396a31db880a87d8a303ea5.png";
import imgPrinceOfEgyptH from "figma:asset/0a6e8b797010b9a6d799f5722dc2527f1063a5c7.png";
import imgAmickOru from "figma:asset/6b0bca6071c201e4d3e9a1a8cbba822eaa4711b5.png";
import imgHonoreeAward from "figma:asset/469d062a2b549a62c048e6edf92b9e9550b1aa65.png";
import imgMuseumOfBible from "figma:asset/c865af95c0e4639cb41f350946240779468d2d7c.png";

import imgUniversityOfOregon from "figma:asset/ab86cc0d063b53561f1cf3050b1b49545bbca1ef.png";
import imgBiola from "figma:asset/c2a027d770b352c22da69d51f41f33b6fd105404.png";
import imgUSC from "figma:asset/f7e24e0e86faf36aa505f168462c19efe0168bbe.png";
import imgAzusaPacific from "figma:asset/03f7a8e41683ddd391c39ed1f3bf799db3ef4ac0.png";

import imgWatchmen from "figma:asset/b47a8414349a3fc2abf0ae627780402c548d4aa2.png";
import imgWarOfThePlanet from "figma:asset/9bd7121aa9db79eebc51fd6d6558ea783c72e059.png";
import imgWanted from "figma:asset/91d5590b960bb04459ce4776fdba84c400d9dde1.png";
import imgStarWarsRogueOne from "figma:asset/a2923c49bcc0053010b0d7da674e8943a005b266.png";
import imgMatrix from "figma:asset/63057eea3f9736fd3e3dbdacb821f8a05fe8817c.png";
import imgLaLaLand from "figma:asset/8f75b592356b603728222e70f38b8ff81a184068.png";
import imgThePrinceOfEgypt from "figma:asset/dd13f006e56cd4f95704bb697d52b259cb4827c9.png";
import imgTheLionKing from "figma:asset/dbc59b7d2c4e685abd9961ec78761f504e406d00.png";
import imgBeautyAndTheBeast from "figma:asset/af70b4f5a1286364eb975d6a907b667a635583ad.png";
import imgAladdin from "figma:asset/b998acb40c7a160b1ff8865878ee7886bf1d4045.png";

import { SiteHeader } from "../components/SiteHeader";
import { ContactLinkButton } from "../components/ContactLinkButton";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const moviePosters = [
    { src: imgThePrinceOfEgypt, alt: "The Prince of Egypt" },
    { src: imgLaLaLand, alt: "La La Land" },
    { src: imgMatrix, alt: "Matrix" },
    { src: imgStarWarsRogueOne, alt: "Star Wars: Rogue One" },
    { src: imgTheLionKing, alt: "The Lion King" },
    { src: imgBeautyAndTheBeast, alt: "Beauty and the Beast" },
    { src: imgAladdin, alt: "Aladdin" },
    { src: imgWatchmen, alt: "Watchmen" },
    { src: imgWarOfThePlanet, alt: "War of the Planet of the Apes" },
    { src: imgWanted, alt: "Wanted" },
  ];

  return (
    <div className="min-h-screen bg-[#ebece4]">
      <SiteHeader />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={imgHeadshot}
                  alt="Amick Byram"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="flex-1 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-['Playfair_Display',serif] font-medium text-[#262626] text-4xl md:text-5xl lg:text-6xl leading-tight"
              >
                A <span className="text-[#ef7452]">Voice</span> For The World's Change Makers{" "}
                <span className="block mt-2">& Story Tellers</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#ef7452] flex-shrink-0" />
                  <p className="font-['Playfair_Display',serif] font-medium text-[#262626] text-lg md:text-xl">
                    2× Grammy Award–nominated
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#ef7452] flex-shrink-0" />
                  <p className="font-['Playfair_Display',serif] font-medium text-[#262626] text-lg md:text-xl">
                    voice heard on <span className="text-[#ef7452]">over 500</span> Hollywood films
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h3 className="font-['Playfair_Display',serif] font-medium text-[#262626] text-3xl md:text-4xl lg:text-5xl mb-6">
            The <span className="text-[#ef7452]">voice</span> behind cinema's biggest stories
          </h3>

          <p className="font-['Playfair_Display',serif] font-medium text-[#5a5a5a] text-lg md:text-xl mb-8 max-w-4xl">
            Amick Byram is a 2× Grammy Award–nominated vocalist whose voice has been featured in hundreds of films and television series, including The Prince of Egypt (as the singing voice of Moses), La La Land, Star Wars, The Simpsons, and Family Guy—making him one of the most widely heard yet behind-the-scenes singers in the industry.
          </p>

          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={imgPrinceOfEgyptH}
                alt="The Prince of Egypt"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="font-['Playfair_Display',serif] font-medium text-white text-2xl md:text-3xl">
                  The singing voice of Moses in The Prince of Egypt
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <p className="font-['Playfair_Display',serif] font-medium text-[#5a5a5a] text-lg md:text-xl mb-6">
              Plus over 500 films, TV shows, and video games
            </p>
            <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
              <div className="flex gap-4 w-max">
                {moviePosters.map((poster, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative w-[200px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={poster.src}
                      alt={poster.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 border-2 border-[#262626] rounded-xl pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <ContactLinkButton />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h3 className="font-['Playfair_Display',serif] font-medium text-[#262626] text-3xl md:text-4xl lg:text-5xl mb-6">
            A <span className="text-[#ef7452]">voice</span> for the world's biggest change makers
          </h3>

          <p className="font-['Playfair_Display',serif] font-medium text-[#5a5a5a] text-lg md:text-xl mb-8 max-w-4xl">
            Through singing and speaking at events for some of the world's most committed changemakers—including nonprofits, universities, and social impact leaders—Amick creates experiences that deeply move audiences and resonate long after the event concludes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={imgAmickOru}
                alt="The Kings University Gala"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="font-['Playfair_Display',serif] font-medium text-white text-xl md:text-2xl">
                  The Kings University Gala
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-[#262626] rounded-2xl pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={imgHonoreeAward}
                alt="Congressional Speakers Club"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="font-['Playfair_Display',serif] font-medium text-white text-xl md:text-2xl">
                  Congressional Speakers Club in Washington D.C.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={imgMuseumOfBible}
                alt="Museum of The Bible Opening Night Gala"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="font-['Playfair_Display',serif] font-medium text-white text-xl md:text-2xl">
                  Museum of The Bible Opening Night Gala in Washington D.C.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <ContactLinkButton />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-16 pb-24">
        <div className="mx-auto max-w-7xl">
          <h3 className="font-['Playfair_Display',serif] font-medium text-[#262626] text-3xl md:text-4xl lg:text-5xl mb-6">
            Empowering the <span className="text-[#ef7452]">voices</span> of rising storytellers
          </h3>

          <p className="font-['Playfair_Display',serif] font-medium text-[#5a5a5a] text-lg md:text-xl mb-12 max-w-4xl">
            Through masterclasses, workshops, and coaching in musical theatre, singing, and acting, Amick trains the next generation of storytellers and performers. His work includes students and programs at universities such as USC, Biola, the University of Oregon, Azusa Pacific, and Vanguard University.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={imgUniversityOfOregon}
                alt="University of Oregon"
                className="w-full h-auto max-h-32 object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={imgBiola}
                alt="Biola University"
                className="w-full h-auto max-h-32 object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={imgUSC}
                alt="University of Southern California"
                className="w-full h-auto max-h-32 object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={imgAzusaPacific}
                alt="Azusa Pacific University"
                className="w-full h-auto max-h-32 object-contain"
              />
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <ContactLinkButton />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
