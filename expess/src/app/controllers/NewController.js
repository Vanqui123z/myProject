class NewController {
     index = (req, res, points) => {
        const value = req.query.khoahoc || ''; 
    
        const result = points.filter(point => 
            point.name.toLowerCase().includes(value.toLowerCase())
        );
        res.render('main', {
            contentFile: '../home',
            points: result,
        }
    )
    }
    
    
}
module.exports = new NewController();