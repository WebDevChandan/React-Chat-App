//As we know in Js, Objects are dynamic.
let employee: {             //Type annotated
    readonly id: number,   //Using readonly modifier to make this property readonly. Now we can't modified this property.
    name: string,
    address?: string, //Making this property as Optional(If some employee doesn't have address)
    retire: (date: Date) => void,
} = {
    id: 1,
    name: "Chandan",
    retire: (date: Date) => {
        console.log(date);
    }
};
