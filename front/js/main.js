
(function(){
    let screenWidth = window.innerWidth
    if (screenWidth >= 1280){
        let scene = document.getElementById('scene')
        let parallaxInstance = new Parallax(scene)
    }
}());

window.addEventListener('orientationchange', () => {
    window.location.reload()
    // const orientation = window.matchMedia('(orientation: landscape)')
    //
    // if (orientation.matches) {
    //     window.location.reload()
    // }
});

(function () {
    let url = new URL(window.location.href)

    if (url.searchParams.has('qtag')) {
        localStorage.setItem('qtag', url.searchParams.get('qtag'))
    }

    window.addEventListener('click', function (e) {
        const parent = e.target.closest('a')
        if (parent) {
            e.preventDefault()
            let link = new URL(parent.href)
            link.searchParams.set('qtag', localStorage.getItem('qtag'))
            document.location.href = link
        }
    })
})();







