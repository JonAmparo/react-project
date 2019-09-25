import { SET_GAME_STARTED, SET_INSTRUCTION_EXPANDED } from './types';

export const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true};
  };
  
export const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false};
};

export const expandInstruction = () => {
    return { type: SET_INSTRUCTION_EXPANDED, instructionsExpanded: true};
};

export const collapseInstruction = () => {
    return { type: SET_INSTRUCTION_EXPANDED, instructionsExpanded: false};
};