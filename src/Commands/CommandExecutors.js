import chalk from "chalk";
import ConvertEmoji from "../Utils/EmojiConverter.js";

import {DameIt} from "./ColoredEggs.js";

const commandsList = [
    {name: "exit", executor: process.exit},
    {name: "dameit", alias: ["fuckyou", "fuck", "dame"], executor: DameIt}
]

export default function CommandExecutor(input) {
    if(input === "") {
        return 0
    }

    for(const command of commandsList) {
        if(command.name === input || (command.alias != null && command.alias.includes(input))) {
            command.executor()
            return 0
        }
    }

    console.log(`${ConvertEmoji("?")} ${chalk.red("Cannot found command:")} ${chalk.yellow.bold(input)}`)
    return 1
}