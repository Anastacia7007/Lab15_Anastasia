import { Routes, Route } from 'react-router-dom'
import './style.css'

function News(){
    return(
        <p><h1>Новости</h1></p>
    )
}
function About(){
    return(
        <h1>Южный Федеральный университет</h1>
    )
}
function Contact(){
    return(
        <h2>+7 (928) 351 - 35 - 31</h2>
    )
}
export function Main(){
    return (
    <div class='main'>
        <div class = 'main_container'>
            <section class ='flex-center'><img src = 'https://i.pinimg.com/1200x/9b/63/cd/9b63cd4093ba6375e81dade358b82449.jpg' width={220}></img></section>
            <article class = 'flex-center'>
                <Routes>
                    <Route path='/news' element ={<News />} />
                    <Route path='/about' element ={<About />} />
                    <Route path='/contact' element ={<Contact />} />
                    <Route path='*' element ={<h3>404</h3>} />
                </Routes>
            </article>
            <aside class = 'flex-center'>Marina Dainenko</aside>
        </div>
    </div>
    )
}
export default Main