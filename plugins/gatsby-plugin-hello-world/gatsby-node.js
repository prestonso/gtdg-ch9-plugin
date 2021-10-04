exports.onPreInit = (_, pluginOptions) => {
  if (pluginOptions.optionB === true) {
    console.log(
      `Logging "${pluginOptions.greeting}" to the console`
    )
  }
}
