const program = require("commander");
const key = require("../commands/key");
program.command("set").description("Set API Key -- get at https://nomics.com").action(key.set);

program.command("show").description("Show API Key -- get at https://nomics.com").action(key.show);

program.command("remove").description("Remove API Key -- get at https://nomics.com").action(key.remove);

program.parse(process.argv);
