const { findAll } = require("../models/User");
const { Op } = require("sequelize");
const Address = require("../models/User");
const User = require("../models/User");

module.exports = {
    async show(req, res) {
        //find all users that have email ending with @email.com
        //Then find all users that live in the street A
        //Then find all techs with react;

        const users = await User.findAll({
            attributes: ["name", "email"],
            where: {
                email: {
                    [Op.iLike]: "%@email.com",
                },
            },
            include: [
                { association: "addresses", where: { street: "rua a" } },
                {
                    association: "techs",
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: "react%",
                        },
                    },
                },
            ],
        });

        return res.json(users);
    },

    async store(req, res) {},
};
