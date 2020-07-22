#!/usr/bin/env node
import { gameWrapper } from '../src/index.js';

import gcdGame from '../src/games/gcd-game.js';

const task = 'Find the greatest common divisor of given numbers.';
gameWrapper(gcdGame, task);
