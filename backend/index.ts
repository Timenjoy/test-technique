import env from "./src/lib/environment";
import App from "./src/app";
import { migrate } from "./src/migrations/migrate";
import seed from "./src/seed";

async function main() {
  await migrate();
  await seed()
  App.listen(env.PORT, () => {
    console.log(`Server listening on port ${env.PORT}`);
  });
}

main();
