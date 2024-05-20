class NewsController{
    index(req,res){
        res.send('Index');
    }

    show(req,res){
        res.send('Detail');
    }


}

module.exports = new NewsController;