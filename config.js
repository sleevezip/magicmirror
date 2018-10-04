# magicmirror

/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "nl",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "upper_third",
			config: {
				zoom: 0.9,
				displayType: "digital"
				}
		},
		{
			module: "currentweather",
			position: "top_left",	// This can be any of the regions.
									// Best results in left or right regions.
			config: {// See 'Configuration options' for more information.
				location: 'Amsterdam,Netherlands',
				locationID: '2759794',
				lang: 'nl',
				appid: 'xxx'
				}
		},
		{
			module: "MMM-rain-forecast",
			position: "bottom_right",   // see mirror setting for options
			header: "Regen Verwachting",
			config: {
                		lat: xx,
                		lon: xx,
				pleaseWait: "Even wachten",
				noRainText: "Geen regen verwacht",
				fillColour: '#0074d9'   // This is a blue color you can also use blue, cyan etc
				}
		},
		{
		    	module: "bustimes",
			position: "top_right",
            		header: "Tram",
				config: {
					timepointcode: "30002221",
					displaymode: "large",
					departs: 5
					}
		},
		{
   			 module:     'MMM-3Day-Forecast',
    			 position:   'bottom_left',
				config: {
					api_key:    'xxx',
					lat:        xx,
					lon:       xx,
					units:      'M',
					lang:       'nl',
					horizontalView: true,
					interval:   900000
					}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "NOS",
						url: "http://feeds.nos.nl/nosnieuwsalgemeen"
					},
					{
						title: "Tweakers",
						url: "http://feeds.feedburner.com/tweakers/nieuws"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
