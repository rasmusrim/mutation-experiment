import "ses"
lockdown()

import('./third-party-package/index.js').then((thirdPartyFunction) => {
    const data = harden({
        name: {
            firstName: 'Rasmus',
            lastName: 'Rimestad',
        },
    });

    try {
        thirdPartyFunction.default(data);
    } catch(error) {
        console.error(error);
    }

    if(data.name.firstName !== 'Rasmus' || data.name.lastName !== "Rimestad") {
        throw new Error('\x1b[41m Data has been mutated!');
    } else {
        console.log('\x1b[32m Data is intact.');
    }

    console.log("\x1b[0m")
});