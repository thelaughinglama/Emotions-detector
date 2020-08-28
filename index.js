const express=require(express);
const app=express();


app.get('/',(req,res)=>{
    res.render('./index');        
})

app.listen(port,(err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected");
    }
}))