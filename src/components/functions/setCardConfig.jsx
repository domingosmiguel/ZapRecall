export default function setCardConfig(id, opened) {
    const configs = {};
    switch (opened[id]) {
        case true:
            configs.containerHeight = "var(--openedCardHeight)";
            configs.containerEvents = "auto";
            configs.coverDisplay = "none";
            configs.coverColor = "var(--preto)";
            configs.coverDecoration = "none";
            configs.coverClass = "hidden";
            configs.cardDisplay = "";
            configs.iconDataIdentifier = "flashcard-show-btn";
            break;
        case false:
            configs.containerHeight = "var(--closedCardHeight)";
            configs.containerEvents = "auto";
            configs.coverDisplay = "flex";
            configs.coverColor = "var(--preto)";
            configs.coverDecoration = "none";
            configs.coverClass = "";
            configs.cardDisplay = "none";
            configs.iconDataIdentifier = "flashcard-show-btn";
            break;
        default:
            configs.containerHeight = "var(--closedCardHeight)";
            configs.containerEvents = "none";
            configs.coverDisplay = "flex";
            configs.coverColor = `${opened[id]}`;
            configs.coverDecoration = "line-through";
            configs.coverClass = "visible";
            configs.cardDisplay = "none";
            configs.iconDataIdentifier = "flashcard-status";
    }
    return configs;
}
