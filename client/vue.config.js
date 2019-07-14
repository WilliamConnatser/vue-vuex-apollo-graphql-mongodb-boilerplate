
//Needed because I was getting a lot of errors without it
//See: https://github.com/Akryum/vue-cli-plugin-apollo/issues/58
module.exports = {
  // ...
  // ...
  chainWebpack: config => {
    // ...
    config.resolve
      .extensions
        .prepend('.mjs')

    config.module
      .rule('mjs')
        .test(/\.mjs$/)
        .include
          .add(/node_modules/)
          .end()
        .type('javascript/auto')
      // ...
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '\'/\'',
        '\'/arguments\'',
        '\'/arguments/protagonistic\'',
        '\'/arguments/antagonistic\'',
        '\'/leaderboards\'',
        '\'/account\'',
        '\'/arguments/protagonistic/inflation\'',
        '\'/arguments/protagonistic/decentralization\'',
        '\'/arguments/protagonistic/efficiency\'',
        '\'/arguments/protagonistic/sidechains-and-layers\'',
        '\'/arguments/protagonistic/hard-money\'',
        '\'/arguments/protagonistic/censorship-resistant\'',
        '\'/arguments/protagonistic/interoperability\'',
        '\'/arguments/protagonistic/conspiracy\'',
        '\'/arguments/protagonistic/network-effect\'',
        '\'/arguments/protagonistic/toxic-community\'',
        '\'/arguments/protagonistic/resources\'',
        '\'/arguments/antagonistic/inflation\'',
        '\'/arguments/antagonistic/decentralized\'',
        '\'/arguments/antagonistic/efficiency\'',
        '\'/arguments/antagonistic/sidechains-and-layers\'',
        '\'/arguments/antagonistic/interoperability\'',
        '\'/arguments/antagonistic/conspiracy\'',
        '\'/arguments/antagonistic/network-effect\'',
        '\'/arguments/antagonistic/toxic-community\'',
        '\'/arguments/antagonistic/resources\''
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
