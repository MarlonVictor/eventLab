import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, GithubLogo, FileArrowDown, Lightning } from "phosphor-react";
import { isPast } from "date-fns";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";


interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1 flex items-center justify-center min-h-full">
                <span className="text-gray-300">Loading...</span>
            </div>
        )
    }

    const isLessonAvailable = data.lesson.availableAt ? isPast(new Date(data.lesson.availableAt)) : false;
    const hasChallenge = !!data.lesson.challenge?.url;

    return (
        <div className="flex flex-col">
            <div className="w-full bg-black shrink-0">
                <div className="video-player-shell">
                    <Player key={props.lessonSlug} aspectRatio="16:9">
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 w-full max-w-[68.75rem] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6 group">
                                <img
                                    src={data.lesson.teacher.avatarURL}
                                    alt={data.lesson.teacher.name}
                                    className="h-16 w-16 rounded-full border-2 border-blue-500 transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400"
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="https://github.com/MarlonVictor" target="_blank" rel="noopener noreferrer" className="event-btn p-4 text-sm bg-purple-500 flex items-center rounded-input font-bold uppercase gap-2 justify-center hover:brightness-110">
                            <GithubLogo size={24} />
                            My GitHub Profile
                        </a>
                        {isLessonAvailable && hasChallenge && (
                            <a href={data.lesson.challenge!.url} target="_blank" rel="noopener noreferrer" className="event-btn p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded-input font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900">
                                <Lightning size={24} />
                                Access the challenge
                            </a>
                        )}
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="https://github.com/MarlonVictor/eventLab" target="_blank" rel="noopener noreferrer" className="glass-card glass-card-interactive event-hover-glow-blue rounded-card overflow-hidden flex items-stretch gap-6 group">
                        <div className="h-full bg-purple-500 p-6 flex items-center transition-colors duration-300 group-hover:bg-purple-300">
                            <GithubLogo size={40} className="transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="font-bold text-xl text-gray-100 block mb-2">
                                Project repository
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Explore the source code of this project on GitHub
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </a>

                    <a href="https://github.com/MarlonVictor/eventLab/releases/download/assets/eventlab-wallpapers.zip" className="glass-card glass-card-interactive event-hover-glow-blue rounded-card overflow-hidden flex items-stretch gap-6 group">
                        <div className="h-full bg-purple-500 p-6 flex items-center transition-colors duration-300 group-hover:bg-purple-300">
                            <FileArrowDown size={40} className="transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="font-bold text-xl text-gray-100 block mb-2">
                                Exclusive wallpapers
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Download exclusive Ignite Lab wallpapers and customize your machine
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}