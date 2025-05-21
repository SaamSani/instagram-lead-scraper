
    chrome.proxy.settings.set({
        value: {
            mode: "fixed_servers",
            rules: {
                singleProxy: {
                    scheme: "http",
                    host: "evo-pro.porterproxies.com",
                    port: parseInt(61236)
                },
                bypassList: ["localhost"]
            }
        },
        scope: "regular"
    }, function() {});

    chrome.webRequest.onAuthRequired.addListener(
        function(details) {
            return {
                authCredentials: {
                    username: "PP_F8AR2T6V9E-country-CA-session-2uil00vALK6T",
                    password: "663bei24"
                }
            };
        },
        {urls: ["<all_urls>"]},
        ["blocking"]
    );
    