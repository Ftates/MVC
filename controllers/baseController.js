class BaseController {
    constructor(model){
        this.model = model
    }

    testRoute(req, res){
        return res.send("yes uck yu")
    }
}

module.exports = BaseController