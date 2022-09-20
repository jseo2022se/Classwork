module.exports = function random (a, b) {
    min = Math.ceil(a)
    max = Math.floor(b)
    return Math.floor(Math.random() * (max - min + 1) + min)
}