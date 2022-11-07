function avaterUpload(req,res,next){
    const upload=uploader(
        "avatars",
        ["image/jpeg","image/jpg","image/png"],
        1000000,
        "Only jpeg , jpg, and png allowed!"

    )
}

module.exports=avaterUpload;