const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })



function triangle(nrow) {

    if(nrow < 2) {
        console.log("invalid argument")
    }
    for(let i = 0;i <nrow;i++) {
        let string ="";
        for(let j=0;j<nrow-i;j++) {
            string = string+" ";
        }
        for(let k=0;k<i+1;k++) {
            string = string+"*"
        }
        for(let l=0;l<i;l++) {
            string = string+"*";
        }
        console.log(string)
    }
}

readline.question(`Enter no. of rows `, (nrow) => {
    triangle(nrow)
    readline.close()
  })
