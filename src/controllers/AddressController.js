const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
    async index(req, res) {
        try {
            const { user_id } = req.params;
            const user = await User.findByPk(user_id, {
                include: { association: "addresses" },
            });
            if (!user) {
                return res.status(400).json({ error: "user not found" });
            }
            return res.status(200).json(user.addresses);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async store(req, res) {
        try {
            const { user_id } = req.params;
            console.debug("usder", user_id);
            const { zipcode, street, number } = req.body;

            const user = await User.findByPk(user_id);
            if (!user) {
                return res.status(400).json({ error: "user not found" });
            }

            const address = await Address.create({
                user_id,
                zipcode,
                street,
                number,
            });
            return res.status(201).json(address);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};
