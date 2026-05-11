const names: string[] = ["zihan", "Niloy", "Raid"]; //Normal

type GenericArray = Array<string>;

const name2: GenericArray = ["Hi", "Hello"];

//Using like a function

type GenericArray2<T> = Array<T>;

const strings: GenericArray2<string> = ["Hi", "Hello"];
const numbers: GenericArray2<number> = [8, 57, 8, 7];

//For tuple
type CoOrdinates<x, y> = [x, y];

const coordinates1: CoOrdinates<number, number> = [5, 8];

const coordinates2: CoOrdinates<boolean, boolean> = [true, false];

//For array of object

const arrObj: GenericArray2<{ name: string; age: number }> = [
  { name: "zihan", age: 22 },
  { name: "niloy", age: 22 },
];
