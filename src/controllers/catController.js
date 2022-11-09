let handleCat = (req, res) => {
    return res.status(200).json([
        {
            id: "1",
            name: "meo"
        },
        {
            id: "2",
            name: "meo hoang thuong"
        }
    ])
}

module.exports = {
    handleCat: handleCat
}