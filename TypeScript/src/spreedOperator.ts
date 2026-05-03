//for array
let friends: string[] = ["fr1", "fr2"];

let sclFriends: string[] = ["rabbi", "niloy"];

let uniFriends: string[] = ["raid", "ifty"];

friends.push(...sclFriends);
friends.push(...uniFriends);

console.log(friends);

//for object

let userInfo = {};
let mainInfo: {
  name: string;
  address: string;
} = {
  name: "zihan",
  address: "Bhola",
};

let otherInfo: {
  hobby: string[];
  skill: string[];
} = {
  hobby: ["gardening", "gaming", "football"],
  skill: ["c++", "c#", "Js", "ts"],
};

userInfo = { ...mainInfo, ...otherInfo };

console.log(userInfo);