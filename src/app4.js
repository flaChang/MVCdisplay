import $ from 'jquery'
import './app4.css'

const $figure = $('#app4 .circle')
$figure.on('mouseenter', () => {
    $figure.addClass('active')
}).on('mouseleave', () => {
    $figure.removeClass('active')
})

