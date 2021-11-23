import $ from 'jquery'
import './app2.css'

const $guide = $('#app2 .guide')
const $content = $('#app2 .content')

$guide.on('click', 'li', (e) => {                 //就是事件委托
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings()
        .removeClass('selected')
    const index = $li.index()
    $content.children()
        .eq(index).addClass('active')            //格式与行为分离
        .siblings().removeClass('active')
})

$guide.children().eq(0).trigger('click')