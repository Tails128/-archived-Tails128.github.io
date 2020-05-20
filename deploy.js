const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: github.com / Tails128 / tails128.github.io,
    user: {
      name: "tails128",
      email: "defendifilippo@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
