var loader = function () { }
loader.prototype.show = function () {
        document.getElementById('app-loader').style.display = 'block'
}
loader.prototype.hide = function () {
    document.getElementById('app-loader').style.display = 'none'
}

export default (new loader());