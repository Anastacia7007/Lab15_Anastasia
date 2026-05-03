import { Routes, Route } from 'react-router-dom'
import './style.css'

function News(){
    return(
        <p><h1>News</h1></p>
    )
}
function About(){
    return(
        <h1>SFU</h1>
    )
}
function Contact(){
    return(
        <h1>+7 (111) 111 - 11 - 11</h1>
    )
}
export function Main(){
    return (
    <div class='main'>
        <div class = 'main_container'>
            <section class ='flex-center'><img src = 'https://i.pinimg.com/736x/b2/96/d5/b296d5ff093313bf9a879e5d17de5987.jpg' width={180}></img></section>
            <article class = 'flex-center'>
                <Routes>
                    <Route path='/news' element ={<News />} />
                    <Route path='/about' element ={<About />} />
                    <Route path='/contact' element ={<Contact />} />
                    <Route path='*' element ={<h3>Не нашлось</h3>} />
                </Routes>
            </article>
            <aside class = 'flex-center'><h2>Anastasiya Mirchuk</h2></aside>
        </div>
    </div>
    )
}
export default Main