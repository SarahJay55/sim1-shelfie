module.exports = {
    getShelf: function(req, res, next) {
        const db = req.app.get('db');
        const shelfId = req.params.shelfId
        db.getshelf([shelfId])
        .then(bins => {
            console.log(bins);
            res.status(200).send(bins);
        }) 
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    },

    getBin: function(req, res, next) {
        const db = req.app.get('db');
        const binId = req.params.binId
        db.getbin([binId])
        .then(item => {
            res.status(200).send(item);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    },

    createBin: function(req, res, next) {
        const db = req.app.get('db');
        const {name, price} = req.body;
        const shelfId = req.params.shelfId;
        const binId = req.params.binId;

        db.createbin([shelfId, binId, name, price])
        .then(newProduct => {
            res.status(200).send(newProduct);
        })
        .catch(err => {
            res.status(200).send(err);
        })

    },

    updateBin: function(req, res, next) {
        const db = req.app.get('db');
        const {name, price} = req.body;

        db.updatebin([name, price])
        .then(updatedProduct => {
            res.status(200).send(updatedProduct)
        })
        .catch(err => {
            res.status(500).send(err);
        })
    },

    deleteBin: function(req, res, next) {
        const db = req.app.get('db')
        const binId = req.params.binId;

        db.deletebin([binId])
        .then(deleted => {
            res.status(200).send(deleted);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    },

    test: function(req, res, next) {
        const db = req.app.get('db')
        db.test()
        .then(value => {
            res.status(200).send(value);
        }) 
        .catch(err => {
            
            res.status(500).send(err)
        })
    }

}