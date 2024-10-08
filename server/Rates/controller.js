const Rate=require('./rates')

const saveRate = async(req, res) => {
    if(req.body.authorId && req.body.filmId && req.body.rate)
        console.log(req.body);
    await new Rate({
        rate: req.body.rate,
        text: req.body.text,
        authorId: req.body.authorId,
        filmId: req.body.filmId,
        date: Date.now()
    }).save()
    res.status(200).send(true)
}

module.exports = {
    saveRate
}