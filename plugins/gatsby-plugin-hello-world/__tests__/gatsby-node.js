import { testPluginOptionsSchema } from "gatsby-plugin-utils"
import { pluginOptionsSchema } from "../gatsby-node"

describe(`pluginOptionsSchema`, () => {
  it(`should invalidate incorrect options`, async () => {
    const options = {
      optionA: undefined, // Should be a string
      optionB: `I am a string`, // Should be a Boolean
      greeting: 3.14159, // Should be a string
    }
    const { isValid, errors } = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    )

    expect(isValid).toBe(false)
    expect(errors).toEqual([
      `"optionA" is required`,
      `"optionB" must be a string`,
      `"greeting" must be a string`,
    ])
  })

  it(`should validate correct options`, async () => {
    const options = {
      optionA: false,
      optionB: `12345`,
      greeting: `Hello world`,
    }
    const { isValid, errors } = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    )

    expect(isValid).toBe(true)
    expect(errors).toEqual([])
  })
})
