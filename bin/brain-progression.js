#!/usr/bin/env node
import { gameWrapper } from '../src/index.js';

import progression from '../src/games/progression.js';

const task = 'What number is missing in the progression?';
gameWrapper(progression, task);
