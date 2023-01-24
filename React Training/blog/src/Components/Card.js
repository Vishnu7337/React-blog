import './CSS/card.css'
import blog_image from './Images/blog_image.jpeg'

function Card() {
    return (
        <>
            <div>
                <div class="card">
                    <div class="card-top">
                        <img src={blog_image} class="blog-img"></img>
                    </div>
                    
                    <div class="card-bottom">
                        <div class="bottom-top">
                            <h2 class="title">Know ChatGpt</h2>
                            <a href="#" class="read-btn">Read more</a>
                        </div>
                        <div class="bottom-bottom">
                            <ul class="tag-list">
                                <li>#chatGpt</li>
                                <li>#AI</li>
                                <li>#Microsoft</li>
                                <li>#OpenAi</li>
                                <li>#RDL</li>
                                <li>#Pycharm</li>
                                <li>#Anaconda</li>
                                <li>#Tensorflow</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;