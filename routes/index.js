module.exports = function(router){
    router.get('/', function(req, res){
        res.render('pages/main/index');  // render 頁面
    });
};