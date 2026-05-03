let sendInvite = (...friends: string[]) => {
    friends.map((item: string) => console.log(`Invitation sent to ${item}`));
}

sendInvite("zihan", "rabbi", "niloy", "raid", "rupok")

//rest operator combine items into an array.