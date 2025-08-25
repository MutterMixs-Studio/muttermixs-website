import React from "react";
import staticData from '../../static/index.js';
import TextHolder from "../ui/TextHolder.jsx";
import TextHeader from "../ui/TextHeader.jsx";
import ImageText from "../ui/ImageText.jsx";
import Text from "../ui/Text.jsx";
import googlePlayImg from "../../assets/images/blockline64/download_google_play.png";
import phoneAngle from "../../assets/images/blockline64/blockline64_phone_angle.png";
import leaderboardFeature from "../../assets/images/blockline64/leaderboard_feature.png";
import skinFeature from "../../assets/images/blockline64/skin_feature.png";
import economyFeature from "../../assets/images/blockline64/economy_feature.png";

const { featuredGames } = staticData;

const Blockline64 = () => {
    const game = featuredGames.find((g) => g.slug === "blockline64");

    return (
        <>
            <TextHeader className="text-4xl font-bold py-4">
                {game.title}
            </TextHeader>
            <a href="https://play.google.com/store/apps/details?id=com.muttermixs.blockline64" target="_blank" rel="noopener noreferrer">
                <img src={googlePlayImg} alt="Google Store"
                    className="w-48 h-auto"
                />
            </a>
            <ImageText
                image={phoneAngle}
                imagePosition="right"
                imageSize="1/3"
            >


                <Text className="py-4">
                    Blockline 64 is an exciting and endlessly engaging puzzle game that challenges your brain. With its
                    straightforward mechanics and dynamic shapes, it offers a fresh take on classic block puzzle games while
                    keeping you hooked for hours.
                </Text>
                <Text className="">
                    In Blockline 64, your goal is to place shapes on the board as efficiently as possible. Sounds simple,
                    right? But as the game progresses, the challenge intensifies. You’ll need to think ahead to find the
                    perfect spot to place each shape. The game continues until you can no longer fit a shape on the board—when
                    that happens, it’s game over! The endless gameplay format ensures that no two rounds are ever the same,
                    keeping you entertained and stretching your planning ability.
                </Text>
                <TextHeader className="text-xl py-4">
                    Personalize your gameplay experience!
                </TextHeader>
                <Text className="">
                    By purchasing new skins for your blocks. Whether you prefer bright neon colors, retro pixel designs,
                    or minimalistic aesthetics, the skin shop has something for everyone. Change the appearance of your
                    blocks to suit your style while keeping the gameplay fresh and exciting.
                </Text>
                <TextHeader className="text-xl py-4">
                    Compete against yourself and others on the global leaderboard!
                </TextHeader>
                <Text className="">
                    Each game is an opportunity to improve your personal best. See how long you can last before running
                    out of space on the board and aim to become the ultimate Blockline champion on the global leaderboard.
                </Text>
                <TextHeader className="text-xl py-4">
                    Easy to learn but hard to master!
                </TextHeader>
                <Text className="">
                    The mechanics are intuitive, allowing you to jump right into the gameplay. However, the real challenge
                    lies in lasting as long as possible while strategically placing each shape. As you push your limits,
                    you’ll find yourself constantly trying “just one more round” to beat your previous score.
                </Text>
            </ImageText>
            <ImageText
                image={leaderboardFeature}
                imagePosition="left"
                imageSize="1/4"
            >
                <TextHeader className="text-2xl py-2">
                    Leaderboard
                </TextHeader>
                <Text>
                    Blockline 64 includes a custom global leaderboard, providing players the opportunity to compete for
                    the highest scores worldwide. Players can track their progress, compare their performance with others,
                    and strive for the top spot. The leaderboard is updated regularly, offering a dynamic and competitive
                    element to the game’s experience.
                </Text>
                <TextHeader className="text-xl py-4">
                    FAQ
                </TextHeader>
                <Text className="text-white">
                    How is my position on the leaderboard determined?
                </Text>
                <Text className="pb-4">
                    Your leaderboard position is determined by the highest score you’ve achieved in the game.
                    The more you play and perform, the higher you can rank.
                </Text>
                <Text className="text-white">
                    Can I reset my leaderboard score?
                </Text>
                <Text className="pb-4">
                    No, your leaderboard score is tied to your highest achievement and cannot be reset. However, you
                    can continue improving your score over time.
                </Text>
                <Text className="text-white">
                    Why can't I see my latest high score on the leaderboard?
                </Text>
                <Text className="pb-4">
                    Your score undergoes validation after completing a game of Blockline 64, which means it’s only
                    processed once you finish the game and gives up. Additionally, due to caching, your new score might
                    not appear immediately, but it will be updated shortly after.
                </Text>
            </ImageText >
            <ImageText
                image={skinFeature}
                imagePosition="right"
                imageSize="1/4"
            >
                <TextHeader className="text-2xl py-2">
                    Customization
                </TextHeader>
                <Text>
                    Blockline 64 offers a variety of in-game skins that let players personalize the appearance of the
                    shapes they place. These skins serve purely as visual enhancements and do not impact gameplay or
                    provide any competitive advantages. Players can unlock and equip different skins to create a unique
                    and customized experience while playing.
                </Text>
                <TextHeader className="text-xl py-4">
                    FAQ
                </TextHeader>
                <Text className="text-white">
                    Will new skins be added?
                </Text>
                <Text className="pb-4">
                    Yes, new skins will be added in future updates to expand customization options.
                </Text>
                <Text className="text-white">
                    How can I obtain skins?
                </Text>
                <Text className="pb-4">
                    Currently, skins can only be purchased using in-game coins from the shop. Once acquired, skins
                    remain permanently available and can always be equipped, even if they are later removed from
                    the in-game store.
                </Text>
            </ImageText>
            <ImageText
                image={economyFeature}
                imagePosition="left"
                imageSize="1/4"
            >
                <TextHeader className="text-2xl py-2">
                    Economy
                </TextHeader>
                <Text>
                    Blockline 64 features a cloud-based economy service, ensuring secure and reliable transactions,
                    real-time currency updates, and seamless synchronization across devices. This system prevents data loss,
                    enabling players to retain their purchases and in-game progress. By leveraging cloud technology,
                    the economy remains fair, balanced, and consistently available across all platforms.
                </Text>
                <TextHeader className="text-xl py-4">
                    FAQ
                </TextHeader>
                <Text className="text-white">
                    Will I lose my purchased items if I reinstall the game?
                </Text>
                <Text className="pb-4">
                    No, all purchases and earned currency are stored in the cloud. Even if you reinstall the game or
                    switch devices, your items will remain available, as long as you have linked your account with one
                    of Blockline 64 many authentication services.
                </Text>
                <Text className="text-white">
                    Can in-game currency be transferred between accounts?
                </Text>
                <Text className="pb-4">
                    No, in-game currency and purchases are tied to your account and cannot be transferred to another account.
                </Text>
                <Text className="text-white">
                    Is an internet connection required for purchases?
                </Text>
                <Text className="pb-4">
                    Yes, an internet connection is required to process transactions and update your in-game balance.
                </Text>
            </ImageText>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pb-8">
                <a
                    href={`${import.meta.env.BASE_URL}blockline64/privacy-policy.html`}
                    className="px-6 py-2 rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition"
                >
                    Privacy Policy
                </a>
                <a
                    href={`${import.meta.env.BASE_URL}blockline64/terms-of-service.html`}
                    className="px-6 py-2 rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition"
                >
                    Terms of Service
                </a>
            </div>
        </>
    );
};

export default Blockline64;
