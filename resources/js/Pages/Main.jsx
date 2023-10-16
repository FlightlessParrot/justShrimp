import Languages from "@/Components/Language/Languages";
import "../../css/main.scss";
import Menu from "@/Components/Menu/Menu";
import { Parallax } from "react-scroll-parallax";

import Hello from "@/Components/Hello";
import { useEffect, useState } from "react";
import LoadingBox from "@/Components/Loading/LoadingBox";
import { useSpring, animated, useTrail } from "@react-spring/web";
import Number from "@/Components/Numbers/Number";
import AgentText from "@/Components/Texts/AgentText";
import Map from "@/Components/Map";
import Step from "@/Components/Steps/Step";

export default function Main({ lang }) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [start, setStart] = useState(false);
    const [processController, setProcessController] = useState(false);
    const [spring, api] = useSpring(() => ({
        from: {
            opacity: 0,
        },
    }));

    const [trail, trailApi] = useTrail(lang.steps.length, () => ({
        from: {
            opacity: 0,
            x: 10,
            y: 5,
        },
    }));
    useEffect(() => {
        if (
            loadingProgress > 0.03 &&
            loadingProgress < 0.89 &&
            start === false
        ) {
            setStart(true);
            api.start({
                from: {
                    opacity: 0,
                },
                to: {
                    opacity: 1,
                },
            });
        }
        if (
            (loadingProgress < 0.03 || loadingProgress > 0.89) &&
            start === true
        ) {
            setStart(false);
            api.start({
                from: {
                    opacity: 0,
                },
                to: {
                    opacity: 1,
                },
                reverse: true,
            });
        }
    }, [loadingProgress, api, start, setStart]);

    return (

        <div className="bg-black bg-opacity-80 md:bg-opacity-90 pt-10 text-cyan-600">
            <div style={{ minHeight: "300vh" }} className="relative top-0">
                <Languages />
                <Menu
                    title={lang.menuTitle}
                    subtitle={lang.menuSubtitle}
                    links={lang.mainLinks}
                    linkTexts={lang.linkTexts}
                    className={
                        " my-10 md:my-0 md:p-6 md:w-[520px] md:absolute top-0 right-0"
                    }
                />

                <Parallax
                    startScroll={1000}
                    endScroll={1400}
                    scaleX={[1, 0]}
                    className="fixed bottom-0 md:top-1/2 z-20 md:right-1/3 lg:right-1/2 m-4"
                    style={{ maxWidth: (3 / 4) * window.innerWidth }}
                >
                    <Hello
                        helloHeader={lang.hello.header}
                        name={lang.hello.name}
                    />
                </Parallax>
                {loadingProgress > 0.02 && loadingProgress < 1 && (
                    <animated.div
                        style={{ ...spring }}
                        className="fixed top-0 w-screen h-screen grid grid-rows-2 grid-cols-2 items-center justify-center p-10 "
                    >
                        <LoadingBox actual={loadingProgress} max={0.5} />
                        <LoadingBox actual={loadingProgress} max={0.8} />
                        <LoadingBox actual={loadingProgress} max={0.9} />
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <Number />
                            <Number />
                            <Number />
                            <Number />
                        </div>
                    </animated.div>
                )}
                <Parallax
                    className="mt-[100vh] w-screen h-screen"
                    onProgressChange={(progress) =>
                        setLoadingProgress(progress)
                    }
                ></Parallax>
            </div>
            <div className="mt-80">
                <AgentText
            
                    trans={lang.trans}
                    imageVideo={
                        <video
                            muted
                            autoPlay
                            loop
                            className="justify-self-center self-center"
                        >
                            {window.innerWidth < 1024 ? (
                                <source
                                    src="\video\distortion_300.mp4"
                                    type="video/mp4"
                                />
                            ) : (
                                <source
                                    src="\video\distortion_600.mp4"
                                    type="video/mp4"
                                />
                            )}
                        </video>
                    }
                    title={lang.about.title}
                    text={lang.about.text}
                >
                    {" "}
                </AgentText>
            </div>
            <div className=" my-10 md:my-20 ">
                <h2 className="text-2xl  pl-20 py-10 tracking-[0.3em] ">
                    {lang.stepsTitle}
                </h2>
                <Parallax
                    onProgressChange={(p) => {
                        if (p > 0.4 && !processController) {
                            trailApi.start({
                                from: {
                                    opacity: 0,
                                    x: 10,
                                    y: 5,
                                },
                                to: {
                                    opacity: 1,
                                },
                            });
                            setProcessController(true);
                        }
                    }}
                    className="flex flex-wrap gap-6 p-6"
                >
                    {lang.steps.map((e, i) => (
                        <animated.div key={i} style={trail[i]}>
                            <Step
                                description={e.description}
                                title={e.title}
                                number={i + 1}
                            />
                        </animated.div>
                    ))}
                </Parallax>
            </div>
            <div>
                <AgentText
                  
                    trans={lang.trans}
                    imageVideo={<Map />}
                    title={lang.mapText.title}
                    text={lang.mapText.text}
                ></AgentText>
            </div>
            <footer className="flex flex-col border-cyan-600 border-t-2 border-opacity-40 mt-12 p-6">
                <Menu
                    title={lang.menuTitle}
                    subtitle={lang.menuSubtitle}
                    links={lang.mainLinks}
                    linkTexts={lang.linkTexts}
                />

                <div className="justify-center items-center flex">
                    <img
                        width={100}
                        height={100}
                        src="/images/Logo_beztła.webp"
                        alt="logo Shrimp"
                    />
                    <ul className="md:ml-20 md:m-6 p-4 ">
                        <li>Shrimp Konrad Strauss</li>
                        <li>NIP: 779 252 93 39</li>
                        <li>tel: +48 730 977 004</li>
                        <li>shrimpinweb@gmail.com</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
