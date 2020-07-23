#!/usr/bin/env node
import { gameWrapper } from '../src/index.js';

import calc from '../src/games/calc.js';

const task = 'What is the result of the expression?';
gameWrapper(calc, task);
