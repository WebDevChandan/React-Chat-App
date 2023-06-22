// Intersection is another technique of combining types like union
// Intersection type represent by & (ampersent)
// This type represents an object that is both a number & a string at the same time.
// Technically, it's impossible an object can be both type a number & a string

// let weight: number & string;


//Another Example:
type Dragable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

//Using Intersection type, we're gonna combine them into a new type
type UIWidget = Dragable & Resizable;

let textBox: UIWidget = {
    drag: () => {

    },
    resize: () => {

    }
};