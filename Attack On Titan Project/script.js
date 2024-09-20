const main = document.getElementById('main')
let currentClass = "main"

function changeBg(newClass) {
    main.classList.replace(currentClass, newClass)
    currentClass = newClass
}


const info = {
    mikasa: 'Mikasa Ackerman (ミカサ・アッカーマン Mikasa Akkāman?) is one of the two deuteragonists of the series, along with Armin Arlert.',
    levi: "Levi Ackerman (リヴァイ・アッカーマン Rivai Akkāman?), often formally referred to as Captain Levi (リヴァイ兵長 Rivai Heichō?), is the squad captain (兵士長 Heishichō?, lit. 'leader of the soldiers') of the Special Operations Squad within the Survey Corps and is widely known as humanity's strongest soldier",
    eren: "Eren Jaeger (エレン・イェーガー Eren Yēgā?) was a former member of the Scout Regiment and the main protagonist of Attack on Titan. He was the only son of Grisha and Carla Jaeger, the younger paternal half brother of Zeke Jaeger,[24] and the last holder of the Attack Titan, Founding Titan,[25] and the War Hammer Titan.",
    armin: "Armin Arlelt (アルミン・アルレルト Arumin Arureruto?) is the 15th and current commander (団長 Danchō?) of the Scout Regiment. He is also a childhood friend of Eren Jaeger and Mikasa Ackermann, and is one of the two deuteragonists of the series."
}

const series = {
    tv: ['snk-1/Attack on Titan Season 1/tv', 'snk-2/Attack on Titan Season 2/tv', 'snk-3/Attack on Titan Season 3/tv', 'snk-4/Attack on Titan Season 3 Part 2/tv', 'snk-5/Attack on Titan Final Season/tv', 'snk-6/Attack on Titan Final Season Part 2/tv', 'snk-7/Attack on Titan: Final Season - The Final Chapters/tv'],
    movie: ['movie-1/Attack on Titan: Guren no Yumiya/movie', 'movie-2/Attack on Titan: Jiyuu no Tsubasa/movie', 'movie-3/Attack on Titan: Kakusei no Houkou/movie', 'movie-4/Attack on Titan: Chronicle/movie', 'movie-5/Attack on Titan Final Season: The Last Attack/movie'],
    ova: ["ova-1/Ilse's Notebook: Notes from a Scout Regiment Member/ova", 'ova-2/A Sudden Visitor : The Torturous Curse Of Adolescence/ova', 'ova-3/Distress/ova', 'ova-4/A Choice with No Regrets: Part One/ova', 'ova-5/A Choice with No Regrets: Part Two/ova', 'ova-6/Wall Sina, Goodbye: Part One/ova', 'ova-7/Wall Sina, Goodbye: Part Two/ova', 'ova-8/Lost In The Cruel World/ova'],
    order: ['snk-1/Attack on Titan season 1/tv', "ova-1/Ilse's Notebook: Notes from a Scout Regiment Member/ova", 'ova-2/A Sudden Visitor : The Torturous Curse Of Adolescence/ova', 'ova-3/Distress/ova', 'ova-4/A Choice with No Regrets: Part One/ova', 'ova-5/A Choice with No Regrets: Part Two/ova', 'snk-2/Attack on Titan Season 2/tv', 'ova-6/Wall Sina, Goodbye: Part One/ova', 'ova-7/Wall Sina, Goodbye: Part Two/ova', 'snk-3/Attack on Titan Season 3/tv', 'ova-8/Lost In The Cruel World/ova', 'snk-4/Attack on Titan Season 3 Part 2/tv', 'snk-5/Attack on Titan Final Season/tv', 'snk-6/Attack on Titan Final Season Part 2/tv']
}


function changeRender(render = 'mikasa') {
    const renderKey = render.split('-')[0]
    const renderCharacter = document.getElementById('character-render')
    const renderName = document.getElementById('characters-name')
    const renderInfo = document.getElementById('characters-info')
    const renderGallery = document.getElementById('characters-gallery')
    renderCharacter.style.animation = 'render 5s infinite;'
    renderCharacter.style.transition = '.50s'
    renderCharacter.style.background = `url(image/characters/${render}_render.png)`;
    renderCharacter.style.backgroundSize = 'contain'
    renderCharacter.style.backgroundRepeat = 'no-repeat'
    renderCharacter.style.backgroundPosition = 'center'
    renderInfo.textContent = eval(`info.${render.split('-')[0]}`)
    renderName.textContent = `${render.toUpperCase().replace('-', ' ')}`

    renderGallery.innerHTML = `<img src="/image/gallery/${renderKey}/${renderKey}-1.jpg" alt="">
                    <img src="/image/gallery/${renderKey}/${renderKey}-2.jpg" alt="">
                    <img src="/image/gallery/${renderKey}/${renderKey}-3.jpg" alt="">`
}

changeRender('eren-yeager')


const container = document.getElementById('container')
const navbar = document.getElementById('navbar')
container.addEventListener('scroll', () => {
    if(container.scrollTop >= (innerHeight - 200)) {
        navbar.classList.add('glass')
    } else {
        navbar.classList.remove('glass')
    }
})

function changeSeries(type = 'tv') {
    const seriesSlider = document.getElementById('series-slider')
    const data = eval(`series.${type}`)
    let allSeries = ''
    data.forEach(e => {
        const [id, title, typeSeries] = e.split('/')
        let html = `<div class="series-card"><img src="image/series/${typeSeries}/${id}.png" alt=""><span class="series-title glass">${title}</span></div>`
        allSeries += '\n' + html
    });
    seriesSlider.innerHTML = allSeries

    const seriesButton = document.querySelectorAll('button[id*="seriesButton"]')
    seriesButton.forEach(e => {
        if(e.id.includes(type)) {
            e.style.background = '#007c00'
        } else {
            e.style.background = '#171717'
        }
    })
}

changeSeries('tv')
