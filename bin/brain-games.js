#!/usr/bin/env node
import { showMsg, askUserName, welcomeUser } from '../src/cli.js';

showMsg('Welkome to the Brain Games!');
const userName = askUserName();
welcomeUser(userName);
