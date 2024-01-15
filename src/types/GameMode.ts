export type GameModeType = {
    value: string;
    label: string;
};

export const GameModes: { [key: string]: GameModeType } = {
    Adventure: {
        value: 'adventure',
        label: 'Aventure'
    },
    Dungeon: {
        value: 'dungeon',
        label: 'Donjon'
    },
    Pantheon: {
        value: 'pantheon',
        label: 'Pantheon'
    }
}

export type GameMode = typeof GameModes[keyof typeof GameModes];