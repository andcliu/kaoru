const { environment } = require('@rails/webpacker')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vue = require('./loaders/vue')

environment.loaders.append('vue', vue)
environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())
module.exports = environment