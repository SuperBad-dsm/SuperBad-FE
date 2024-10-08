module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./app"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@": "./app",
            "@icons": "./app/assets/icons",
            "@types": "./app/types",
            "@commonents": "./app/components/common",
            "@layouts": "./app/components/layouts",
            "@api": "./app/components/api",
            "@utils": "./app/utils/function",
          },
        },
      ],
    ],
  };
};
