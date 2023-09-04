//importing file system 
const fs = require('fs');

//reading files 
fs.readFile('./docs/blog1.txt', (err, data)=> {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
})

console.log("last line")

//writing files, writes over text 
fs.writeFile("./docs/blog1.txt", "hello, world", ()=>{
    console.log("file was written")
})
//creates new file if file doesn't exist 
fs.writeFile("./docs/blog2.txt", "hello, again", ()=>{
    console.log("file was written")
})

//directiores 
if (!fs.existsSync('./assests')){
    fs.mkdir('./assests', (err)=>{
        if (err){
            console.log(err);
        }
        console.log('folder created');
    })
}
else{
    fs.rmdir('./assests', (err)=>{
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

//deleting files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if (err){
            console.log(err);
        }
        console.log("file deleted")
    })
}