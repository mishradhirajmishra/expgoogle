
module.exports.Home=(req,res)=>{
    res.render('index',{title:'Home'})
} 

module.exports.Dashboard=(req,res)=>{
    res.render('dashboard',{title:req.user.name,role:req.user.role,image:req.user.image})
}