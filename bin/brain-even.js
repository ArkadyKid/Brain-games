#!/usr/bin/env node
import { gameWrapper } from '../src/index.js';

import evenGame from '../src/games/even.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
gameWrapper(evenGame, task);
