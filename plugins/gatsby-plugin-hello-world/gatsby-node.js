exports.onPreInit = (_, pluginOptions) => {
  if (pluginOptions.optionB === true) {
    console.log(
      `Logging "${pluginOptions.greeting}" to the console`
    )
  }
}

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    optionA: Joi.string().required().description(`Enables optionA.`),
    optionB: Joi.boolean().description(`Enables optionB.`),
    greeting: Joi.string().required().description(`Greeting logged to console.`),
  })
}
