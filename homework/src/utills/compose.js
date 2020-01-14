export default function compose(...fns) {
    if (fns.length === 0) {
        return arg => arg;
    }

    if (fns.length === 1) {
        return fns[0];
    }

    return fns.reduce((accumulator, current) => (...args) => accumulator(current(...args)));

    /*
    *   fns.reduce(function(accumulator,current){
    *          return function(...args){
    *                return accumulator(current(...args))
    *
    *          }
    *   })
    *
    *
    *
    * */
}

// compose((name)=>`Hello ${name}`, (name)=>name.toUpperCase())
// f(g(x))