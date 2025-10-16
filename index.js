Object.freeze(Object)
Object.freeze(Object.prototype)
const thirdPartyFunction = require('./third-party-package/index.js');


const data = {
    name: {
        firstName: 'Rasmus',
        lastName: 'Rimestad',
    },
};

deepFreeze(data);

thirdPartyFunction(data);

if(data.name.firstName !== 'Rasmus' && data.name.lastName !== "Rimestad") {
    throw new Error('Data has been mutated!');
} else {
    console.log('Data is intact.');
}

function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);

    // Freeze properties before freezing self
    for (const name of propNames) {
        const value = object[name];

        if ((value && typeof value === 'object') || typeof value === 'function') {
            deepFreeze(value);
        }
    }

    return Object.freeze(object);
}

