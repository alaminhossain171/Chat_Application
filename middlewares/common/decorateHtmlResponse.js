function decorateHtmlResponse(Page_title){
   return function(req,res,next){
    res.locals.html=true;
    res.locals.title=Page_title+' - '+process.env.APP_NAME;
    next()
   }
}
module.exports={
    decorateHtmlResponse
}