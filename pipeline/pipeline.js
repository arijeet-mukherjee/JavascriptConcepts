const pipe = functions => data =>{
    return functions.reduce((value , func) => 
        func(value),
        data
    );
}

const calc = incrdcr =>pipe([
    x => x+4,
    x => x-2
])(incrdcr);

console.log(calc(5));