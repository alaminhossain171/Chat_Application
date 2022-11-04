const createError = require("http-errors");

function notfoundHandler(req,res,next){
    next(createError(404,'Your requested page not found !'))
}
function errorHandler(err,req,res,next){
 res.locals.error=
 process.env.NODE_ENV==='development'?err:{msg:err.message};
 res.status(err.status||500);
 if(res.locals.html){
    res.render('error',{
        title:"Error page"
    })
 }
 else{
    res.json(res.locals.error);
 }
}
module.exports={
    notfoundHandler,
    errorHandler
}