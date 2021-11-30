import chalk from "chalk";

export default function ConvertEmoji(normalCharset) {
    switch(normalCharset) {
        case "v": return chalk.green("✔ ")
        case "?": return chalk.red("? ")
        default: return ""
    }
}