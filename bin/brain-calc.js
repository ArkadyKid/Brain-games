#!/usr/bin/env node
import { gameWrapper } from '../src/index.js';

import calGame from '../src/games/calc-game.js';

const task = 'What is the result of the expression?';
gameWrapper(calGame, task);
