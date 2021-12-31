

const { merge } = require( 'webpack-merge' )
const commonConfig = require( './webpack.common.js' )


// Writing an export this way allows use with npx.
// Gets env specific config and merges with common config.
// Thank you [ vishvas ]( https://www.youtube.com/watch?v=25kFcF54GNk&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo&index=3 )
module.exports = ( envVars ) => {
	
	const { env } = envVars
	console.log( `Webpack configuration in ${env} mode.` )

	const envConfig = require( `./webpack.${env}.js` )
	const config = merge( commonConfig, envConfig )

	console.log( 'Configuration: ', config )

	return config
}
