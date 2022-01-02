#!/usr/bin/env node
import { showWelcomeMsg, askUserName, welcomeUser } from '../src/cli.js';

showWelcomeMsg();
const userName = askUserName();
welcomeUser(userName);
