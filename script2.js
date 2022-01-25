const purse = {
    name: "Michael Kors",
    volume: 30,
    color: "white",
    pocketNum: 15,
    strapLength:{
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

console.log('The purse object:', purse);
console.log('The pocketNum value:', purse.pocketNum);

console.log('left before:', purse.strapLength.left);

backpack.newStrapLength(10,15);

console.log('left after:', purse.strapLength.left)