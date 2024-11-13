function oling(req,res,next){
    const method = req.method;
    const path = req.path;

    console.log(`${method} ${path}`)
    next();
}