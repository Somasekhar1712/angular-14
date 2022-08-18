// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ENDPOINT: 'https://new-mathbked.aieducator.com',
  // API_ENDPOINT: 'http://d5d7-2402-8100-2862-f783-1e3e-7753-bf3a-eb0c.ngrok.io',
  SOCKET_ENDPOINT: 'wss://new-mathbked.aieducator.com/ws/user',
  razor_key: 'rzp_live_w5SBXswVwFjidw', // Live Key
  // razor_key = 'rzp_test_zIvmRjsKwNdGIP';		// Test Key
  razor_secret: 'LVfiXdfSlGsDcNGR4OMui4nZ' // Live Secret
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
