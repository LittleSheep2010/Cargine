import readline from "readline"
import os from "os"

import CommandExecutor from "./src/Commands/CommandExecutors.js";

(async () => {

    const prompt = `${os.userInfo().username}@cargine-0.2.1> `

    console.log("")
    console.log("  Cargine shell v0.2.1")
    console.log("  Welcome! " + os.userInfo().username)
    console.log("")
    console.log("  If you're FIRST TIME using(play) Cargine(Carord)")
    console.log("  Use \"help\" command for get help")
    console.log("  Use \"exit\" command or Ctrl+C to exit")
    console.log("")

    process.stdout.write(prompt)

    const std_streams = readline.createInterface({input: process.stdin, output: process.stdout})
    std_streams.on("line", input => {
        CommandExecutor(input)
        process.stdout.write(prompt)
    })
})()