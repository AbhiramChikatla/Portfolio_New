"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const RecentProjects = () => {
    return (
        <section className="py-20" id="projects">
            <h1 className="heading ">
                My{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8  mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem]  flex items-center justify-center  w-[80vw] sm:h-[41rem] h-[32rem] sm:w-[570px]"
                        key={item.id}
                    >
                        <PinContainer
                            title="/ui.aceternity.com"
                            // title={item.link}
                            href="https://twitter.com/mannupaaji"
                        >
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden   mb-10 sm:h-[40vh] h-[30vh]">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${
                                                    5 * index + 2
                                                }px)`,
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt="icon5"
                                                className="p-2"
                                            />
                                        </div>
                                    ))}
                                </div>
{/* TODO:changed div to Link */}
                                <Link href={item.link} target="_blank" className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        {item.working ? "Check Live Demo": "Check Repo"}
                                    </p>
                                    <FaLocationArrow
                                        className="ms-3"
                                        color="#CBACF9"
                                    />
                                </Link>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentProjects;
