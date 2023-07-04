import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import logo from "../assets/logo.jpg";
import "./Home.css"

export default function Home() {
   return (
   <div className="homepage">
    <header>
      <img className="logo" src={logo} alt="Logo"></img>
      <nav>
        <ul>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">About Us</a></li>
          <li><a className="create-portfolio-button" href="#">Create Portfolio</a></li>
        </ul>
      </nav>
    </header>



<div className="thebody">

<div className="bodyEx">  
    <section className="short-caption">
      <p id="caption1">Get hired  <span>faster</span> with your personalized <span>portfolio website!</span></p>
      <a className="button" href="#">Get Started</a>
    </section>

    <section className="res-img">
      <img id="first-image" src={img1} alt="Resume Preview"></img> 
    </section>
</div>

<div className="bodyEx">  
    <section className="res-img">
        <img className="other-images" src={img2} alt="Resume Preview"></img>
      </section>

    <section className="short-caption">
        <h2>User-friendly Interface:</h2>
      <p id="caption2">Our user-friendly interface makes it easy to create a personalized website without any coding or design skills.</p>
    </section>
</div>

<div className="bodyEx">  
    <section className="short-caption">
        <h2>Customizable Templates:</h2>
      <p id="caption2">Choose from a range of customizable templates to showcase your work and achievements in the best possible way.</p>
    </section>

    <section className="res-img">
        <img className="other-images" src={img3} alt="Resume Preview"></img>
      </section>
</div>


<div className="bodyEx">  
    <section className="res-img">
        <img className="other-images" src={img4} alt="Resume Preview"></img>
      </section>

    <section className="short-caption">
        <h2>Ability to Upload Resume</h2>
      <p id="caption2">Upload your resume and showcase your skills, projects, and achievements in a professional and engaging way.</p>
    </section>
</div>


<div className="bodyEx">  
    <section className="short-caption">
        <h2>Social media and email integration:</h2>
      <p id="caption2">Easily share your website on social media or include it in your email signature to make a lasting impression on recruiters and hiring managers.</p>
    </section>

    <section className="res-img">
        <img className="other-images" src={img3} alt="Resume Preview"></img>
      </section>
</div>


</div>

{/* Testimonials */}
<h3>Testimonials</h3>
<section className="testimonial">

    <div className="testimonial-item">
      <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="Headshot 1"></img>
      <p>"I used the personalized portfolio website provided by your platform to showcase my work and skills. It helped me stand out from the crowd and land my dream job. Thank you!"</p>
    </div>

    <div className="testimonial-item">
      <img src="https://randomuser.me/api/portraits/men/84.jpg" alt="Headshot 2"></img>
      <p>"Creating my portfolio website with your platform was a game-changer. It allowed me to present my projects and achievements in a professional and organized manner. Recruiters were impressed, and I got multiple job offers!"</p>

    </div>
    <div className="testimonial-item">
      <img src="https://randomuser.me/api/portraits/men/82.jpg" alt="Headshot 3"></img>
      <p>"Your website builder made it easy for me to build a stunning portfolio site that showcases my work. It gave me the confidence to apply for jobs, and I received positive feedback on my portfolio from hiring managers. It definitely made a difference!"</p>

    </div>
  </section>



    <script src="script.js"></script>
    <footer><p>Developed By</p>
    Duke Okeke, Robbie Swanson, Caleb Barzee, Shellman Tyler</footer>
   </div>
   )
}