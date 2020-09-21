const User = require("../models/User");

module.exports = {
    async store(req, res) {
        try {
            const { name, email } = req.body;
            const user = await User.create({ name, email });

            return res.json(user);
        } catch (err) {
            return res.json(err);
        }
    },

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },
};
