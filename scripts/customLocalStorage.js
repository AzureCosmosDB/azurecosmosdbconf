window.customLocalStorage = {
    getItem(key) {
        // Get the parsed value of the given key.
        let result = JSON.parse(window.localStorage.getItem(key));

        if (result) {
            // If the entry is expired remove the entry and return null.
            if (result.expireTime <= Date.now()) {
                window.localStorage.removeItem(key);
                return null;
            }

            // Else return the value.
            return result.data;
        }

        // If the key does not have value.
        return null;
    },

    // Add an entry. Default expiry is 30 days in milliseconds.
    setItem(key, value, maxAge=30*30*60*1000) {
        // Store the value as an object along with expiry date.
        let result = { 
            data : value 
        };

        if (maxAge) {
            // Set the expiry from the current date.
            result.expireTime = Date.now() + maxAge;
        }

        let resultStr = JSON.stringify(result);
        //console.log('customLocalStorage result size: ' + resultStr.length);

        window.localStorage.setItem(key, resultStr);
    },
    removeItem(key) {
        window.localStorage.removeItem(key);
    },
    clear() {
        window.localStorage.clear();
    }
}
