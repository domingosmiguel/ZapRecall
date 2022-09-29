import { useContext } from "react";
import { PlayOutline } from "react-ionicons";
import { CloseCircle } from "react-ionicons";
import { HelpCircle } from "react-ionicons";
import { CheckmarkCircle } from "react-ionicons";
import StatesContext from "../assets/providers/cardStatesProvider";

function SetIcon({ color, flipped, iconDataIdentifier, cardId }) {
    const { handleCoverClick } = useContext(StatesContext);
    switch (flipped) {
        case 0:
            return (
                <section data-identifier={iconDataIdentifier}>
                    <CloseCircle color={color} height="25px" width="25px" />
                </section>
            );
        case 1:
            return (
                <section data-identifier={iconDataIdentifier}>
                    <HelpCircle color={color} height="25px" width="25px" />
                </section>
            );
        case 2:
            return (
                <section data-identifier={iconDataIdentifier}>
                    <CheckmarkCircle color={color} height="25px" width="25px" />
                </section>
            );
        default:
            return (
                <section
                    data-identifier={iconDataIdentifier}
                    onClick={() => handleCoverClick(cardId)}
                >
                    <PlayOutline color={color} height="25px" width="25px" />
                </section>
            );
    }
}

export default SetIcon;
