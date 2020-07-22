#!/usr/bin/env node
import { gameWrapper } from '../src/index.js';

import calGame from '../src/games/calc-game.js';

gameWrapper(calGame, 'What is the result of the expression?');
