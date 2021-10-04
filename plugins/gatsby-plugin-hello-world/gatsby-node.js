exports.onPreInit = (_, pluginOptions) => {
  if (pluginOptions.optionB === true) {
    console.log(
      `Logging "${pluginOptions.greeting}" to the console`
    )
  }
}

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    optionA: Joi.string()
      .required()
      .description(`Enables optionA.`)
      .messages({
        // Override the error message if .required() fails.
        "any.required": `"optionA" needs to be defined as true or false.`,
      }),
    optionB: Joi.boolean().description(`Enables optionB.`),
    greeting: Joi.string()
      .required()
      .default(`This is the default greeting.`)
      .description(`Greeting logged to console.`),
  })
}
