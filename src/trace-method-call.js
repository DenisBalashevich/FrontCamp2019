export function traceMethodCalls(obj) {
    let handler = {
        get(target, propKey, receiver) {
            const origMethod = target[propKey];
            return async function (...args) {
                let result = await origMethod.apply(this, args);
                console.log(propKey + JSON.stringify(args)
                    + ' -> ' + JSON.stringify(result));
                return result;
            };
        }
    };
    return new Proxy(obj, handler);
}