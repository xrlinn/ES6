let obj = {
    name:"tom",
    logName(){
        console.log(this.name)
    }
};
const str = "zhe是字符创"
let fun1 = ()=>{
    let str = "ss"
}
obj.logName()