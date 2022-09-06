const prev = document.getElementById('btn-prev'),
        next = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot'),
        heads = document.querySelectorAll('.slider-navigation_item'),
        contents = document.querySelectorAll('.text-wrapper')


let index = 0


const activeSlide = n => {
        for (slide of slides) {
                slide.classList.remove('active')
        }
        slides[n].classList.add('active')
}

const activeDot = n => {
        for (dot of dots) {
                dot.classList.remove('active')
        }
        dots[n].classList.add('active')
}

const activeHeads = n => {
        for (head of heads) {
                head.classList.remove('active')
        }
        heads[n].classList.add('active')
}

const activeContents = n => {
        for(content of contents) {
                content.classList.remove('active')
        }
        contents[n].classList.add('active')
}

const nextSlide = () => {
        if (index == slides.length - 1) {
                index = 0
                prepareCurrentSlide(index)
        } else {
                index++
                prepareCurrentSlide(index)
        }
}

const prevSlide = () => {
        if (index == 0) {
                index = slides.length - 1
                prepareCurrentSlide(index)
        } else {
                index--
                prepareCurrentSlide(index)
        }
}


const prepareCurrentSlide = ind => {
        activeSlide(ind)
        activeDot(ind)
        activeHeads(ind)
        activeContents(ind)
}


next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)



dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
                index = indexDot
                prepareCurrentSlide(index)
        })
})

heads.forEach((item, indexHeads) => {
        item.addEventListener('click', () => {
                index = indexHeads
                prepareCurrentSlide(index)
        })
})

contents.forEach((item, indexContents)=>{
        item.addEventListener('click', () => {
                index = indexContents
                prepareCurrentSlide(index)
        })
})