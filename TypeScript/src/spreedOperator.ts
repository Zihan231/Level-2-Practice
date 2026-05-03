//for array
let friends: string[] = ["fr1", "fr2"];

let sclFriends: string[] = ["rabbi", "niloy"];

let uniFriends: string[] = ["raid", "ifty"];

friends.push(...sclFriends);
friends.push(...uniFriends);

console.log(friends);