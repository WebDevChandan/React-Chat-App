//Using Type Alias we can define custom type
//In type alias we'll use Pascal Case
type Employee2 = {
    readonly id: number,
    name: string,
    address?: string,
    retire: (date: Date) => void,
}

let employee2: Employee2 = {
    id: 2,
    name: "King",
    retire: (date: Date) => {
        console.log(date);
    }
};
