let handleDog = (req, res) => {
    return res.status(200).json([
        {
            id: "1",
            name: "cho"
        },
        {
            id: "2",
            name: "cho hoang thuong"
        }
    ])
}

module.exports = {
    handleDog: handleDog
}