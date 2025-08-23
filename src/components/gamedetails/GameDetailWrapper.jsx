import Blockline64 from "./Blockline64";
import EscapeProtocol from "./EscapeProtocol";
import React from "react";

const gameComponent = {
    "blockline64": <Blockline64 />,
    "escape-protocol": <EscapeProtocol />
};

export default function GameDetailWrapper({ id }) {
    const Component = gameComponent[id];
    return Component ? Component : <div>Game not found</div>;
}
