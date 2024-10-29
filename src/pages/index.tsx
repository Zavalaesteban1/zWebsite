// Import statements for various components, utilities, and libraries
import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";

import {
  ChevronRight,
  Code2,
  Frame,
  ChevronLeft,
  Computer,
  Wrench,
  Linkedin,
  
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";

import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

// Static data arrays for different sections
const aboutStats = [
  // Array of statistics shown in the About section
  { label: "Years of experience", value: "1+" },
  { label: "Technologies mastered", value: "5+" },
  { label: "Companies worked with", value: "3" },
];

const processImages = [
  {
    title: "Robot Vision System",
    description: "Developing computer vision algorithms",
    image: "/assets/robot-vision.jpg", // Replace with your actual image paths
    url: "https://www.youtube.com/watch?v=CneUl_0Av68"
  },
  {
    title: "Liberty Mutual Project",
    description: "Build an internal Application for tech support",
    image: "/assets/liberty-mutual.jpg",
    url: "https://www.libertymutual.com"
  },

  {
    title: "Software Development",
    description: "Creating Software for a hackathon competition",
    image: "/assets/software-dev.jpg",
    url: "https://github.com/Zavalaesteban1/clentcare2"

  },
  // {
  //   title: "Teaching Assistant",
  //   description: "Mentoring future developers",
  //   image: "/assets/teaching.jpg",
  // },

  {
    title: "C++ Development",
    description: "Building robot vision with c++",
    image: "/assets/cpp-dev2.jpg",
    url: " https://github.com/Zavalaesteban1/robotVision"
  },
];

const services = [
  {
    // Array of services offered including descriptions and icons
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "C++",
    description:
      "Building intuitive programs with Data Structures and Algorithms with C++",
    icon: Frame,
  },

  {
    service: "Contact Info",
    description: (
      <Link
        href="https://www.linkedin.com/in/zavala0101"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#770F0F] transition-colors duration-200"
      >
        View LinkedIn Profile
      </Link>
    ),
    icon: Linkedin,
  },
  {
    service: "Full-Stack Development",
    description:
      "Building complete, dynamic web applications from frontend to backend, ensuring seamless performance and user experience.",
    icon: Computer,
  },
  {
    service: "Product",
    description:
      "Creating products on the go ",
    icon: Wrench,
  },
];

export default function Home() {
  // State management
  const refScrollContainer = useRef(null); // Reference for scroll container
  const [isScrolled, setIsScrolled] = useState<boolean>(false); // Track scroll state
  // const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null); // Carousel control
  const [currentSlide, setCurrentSlide] = useState(0);
  // useEffect for handling scroll behavior and navigation
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    console.log('Current Slide:', currentSlide);
  }, [currentSlide]);

  // useEffect for card hover animations
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient /> {/* Background gradient component */}
        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>next.js</span>
              <span className={styles.pill}>tailwindcss</span>
              <span className={styles.pill}>typescript</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Esteban Zavala.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                Software Engineer/Developer<br />
                <Link
                  href="https://www.utrgv.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#770F0F] transition-colors duration-200 hover:underline"
                >
                  The University of Texas Rio Grande Valley<br />
                </Link>
                <Link
                  href="https://visitbtx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#770F0F] transition-colors duration-200 hover:underline"
                >
                  Brownsville, Texas
                </Link>
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:zavala.esteban105690@gmail.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Image
                src="/assets/pumpinggas.jpg"
                alt="Description"
                fill
                priority
                className="rounded-lg bg-black object-cover object-center"
              />
            </Suspense>
          </div>
        </section>
        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              I&apos;m an Programmer expirenced in{" "}
              <Link
                href="https://create.t3.gg/"
                target="_blank"
                className="underline"
              >
                Software Development utilizing C++, React, Javascript, Next.js.
              </Link>{" "}
              Since 2023, I started coing, changing the game for me. It allowed
              to dive into a new adventure. Mastered C++. Talked and travelled
              to other companies my first year of college. Created software for a robot and
              developed a software product for a company my 2nd year. Now in my
              3rd year I&apos;m a Teaching Assistant and the future has no limits.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              💎 Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Projects from the past year.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from creating the
              vision of a robot, to developing for Liberty Mutual.
            </p>

            {/* Carousel */}
            <div className="relative mx-auto mt-14 max-w-4xl">
              <div className="relative bg-gray-800 rounded-lg">
                {/* Main Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Link
                    href={processImages[currentSlide].url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={processImages[currentSlide].image}
                      alt={processImages[currentSlide].title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority
                    />

                    {/* Title and Description */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
                      <h3 className="text-white text-xl font-bold">
                        {processImages[currentSlide].title}
                      </h3>
                      <p className="text-white/80">
                        {processImages[currentSlide].description}
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Navigation Buttons - Made Larger and More Visible */}
                <button
                  onClick={() => setCurrentSlide(prev =>
                    prev === 0 ? processImages.length - 1 : prev - 1
                  )}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>

                <button
                  onClick={() => setCurrentSlide(prev =>
                    prev === processImages.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>
              </div>

              {/* Slide Counter */}
              <div className="mt-4 text-center">
                <span className="bg-[#770F0F] px-4 py-2 rounded-full text-white font-medium transition-all duration-200 hover:bg-[#8B1212]">
                  {currentSlide + 1} / {processImages.length}
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="info" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-black">
                  Here are some of my skills and my contact info.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Interested in Internships for C++, Software Development, and
              Software Eningeering(Front-end)
            </p>
            <Link href="mailto:zavala.esteban105690@gmail.com" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#770F0F" />
              <stop offset={1} stopColor="#770F0F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#770F0F"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#770F0F" />
              <stop offset={1} stopColor="#770F0F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
