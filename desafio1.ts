let employee = {
    code: 10,
    name: 'John'
};

let employee2: (code:number, name:string ) => {
    code: 10,
    name: 'John'
}

interface employee {
    code: number,
    name: string
}

let employee: employee = {
    code: 200,
    name: 'John'
}
