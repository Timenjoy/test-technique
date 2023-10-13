import env from "./src/services/environment";
import App from "./src/app";
import { migrate } from "./src/migrations/migrate";

async function main() {
  await migrate();
  App.listen(env.PORT, () => {
    console.log(`Server listening on port ${env.PORT}`);
  });
}

main();
