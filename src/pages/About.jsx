import React from "react";
import TextHeader from "../components/ui/TextHeader";
import Text from "../components/ui/Text";
import TextHolder from "../components/ui/TextHolder";

export default function About() {
    return (
        <section className="text-left space-y-6 px-4 sm:px-6 lg:px-8">
            <TextHolder className="text-2xl font-semibold">
                <TextHeader className="text-4xl font-bold">
                    About the studio
                </TextHeader>

                <Text>
                    MutterMixs is my solo adventure into the world of game development. Driven by a love for the competitive
                    side of gaming, I aim to craft unique and engaging experiences that connect with players. My first release,
                    <span className="font-semibold"> Blockline 64</span>, a puzzle-based mobile game, gave me valuable lessons in
                    game design, architecture, and player experience. With those insights, I’m excited to keep building and
                    bringing new ideas to life.
                </Text>

                <Text>
                    My focus is on fun, competitive multiplayer games that bring people together. I believe the excitement of
                    competition creates memorable moments and builds community. I want to design games that challenge players,
                    spark creativity, and encourage both collaboration and friendly rivalry.
                </Text>

                <Text>
                    MutterMixs Studio is a one-person effort, which means every project carries a personal touch. From the first
                    sketch of an idea to the final polish, I’m involved in every step. Development can take time, but I strongly
                    believe that quality over quantity is what makes a game worth remembering.
                </Text>

                <Text>
                    Looking ahead, I’m exploring new projects that push my creativity further. My goal is to expand into larger
                    multiplayer experiences while continuing to experiment with smaller projects along the way. Each release is
                    both a milestone and a stepping stone toward building a library of games that players can come back to again
                    and again.
                </Text>
            </TextHolder>
        </section>
    );
}
