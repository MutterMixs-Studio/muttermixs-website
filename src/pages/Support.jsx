import React from 'react';
import TextHeader from "../components/ui/TextHeader";
import Text from "../components/ui/Text";
import TextHolder from "../components/ui/TextHolder";

export default function Support() {
    return (
        <TextHolder className="text-2xl py-4">
            <TextHeader className="text-4xl font-bold">
                Support
            </TextHeader>

            <Text className="py-4">
                If you need support or have any questions, feel free to reach out! You can contact me via email at
                <span className="font-semibold"> support@muttermixs.com</span>. I’m here to help!
            </Text>


        </TextHolder>
    );
}
