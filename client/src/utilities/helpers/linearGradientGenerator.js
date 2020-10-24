export const linearGradientGenerator = (returnProps, image) => {
  const returnFunc = returnProps => {
    return `
      linear-gradient(
        rgba(${returnProps.theme.colorPrimaryLightRGBA}, 0.8), 
        rgba(${returnProps.theme.colorPrimaryDarkRGBA}, 0.8)
      ),
      url(${image})
    `
  }

  return returnFunc
}