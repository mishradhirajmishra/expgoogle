
 
module.exports.Google= (req,res)=>{
    res.send('google routing working');
} 
module.exports.GoogleRedirect=(req,res)=>{
     res.redirect('/dashboard')
} 
module.exports.LogOut=(req,res)=>{
    req.logout();
    res.redirect('/');
} 