

const users = [
    {
        name: "Roger",
        age: 56
    },
    {
        name: "Garp",
        age: 70
    }
]

const getAll = (req, res) => {
    res.status(200).json(users);
}

const create = (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.status(201).json(newUser);
}

const update = (req, res) => {

    const {usernumber} = req.params;
    const {userName, age} = req.body;

    const updateUser = users.splice(usernumber, 1, userName)

    res.status(200).json(usernumber);

}

module.exports = {
    getAll,
    create,
    update
}