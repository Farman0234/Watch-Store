const getWatch = require('../Model/WatchModel');

module.exports = {

    getWatch: async (req, res) => {
        try {
            const watch = await getWatch.find();
            res.status(200).json(watch);
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json(error);
        }
    }
};
