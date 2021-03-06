module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    https: false
  },
  pwa: {
    name: "TrailRunner",
    themeColor: "#9c0b0b",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "dev/sw.js"
    }
  }
};
