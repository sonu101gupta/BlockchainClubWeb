import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
<>
<div className='home' id="Home">
<main>
    <h1>Blockchain and Cybersecurity Club</h1>
    <p>Unleash the power of digital trust with us </p>
</main>
</div>

<div className='home2' >
<img src={vg} alt="Graphics" />
<div>
    <p>
    The Blockchain Club aims to not only deepen students' understanding of blockchain technology but also foster a collaborative community that fosters innovation and real-world problem-solving using blockchain principles.
    </p>
    
</div>
</div>

<div className='home3' id='about'>
    <div>
        <h1>Who we are ?</h1>
        <p>
        The Blockchain Club at NMIT College is a vibrant community of students passionate about exploring and understanding the intricacies of blockchain technology. Open to students from various disciplines, this club serves as a platform for learning, collaboration, and innovation in the field of blockchain.</p>
    </div>
</div>

<div className="home4" id="brands">
    <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s",
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>

            <div style={{
                animationDelay:"0.5s",
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.7s",
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>

            <div style={{
                animationDelay:"0.1s",
            }}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>


            
        </article>
    </div>

</div>

</>
  )
}

export default Home