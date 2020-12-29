module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
  },
  projects: [
    {
      root: "./nuxt",
      package: "./package.json",
      tsconfig: "./tsconfig.json",
      globalComponents: ["./src/components/**/*.vue"],
    },
  ],
};
