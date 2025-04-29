import style from '../styles/index.module.css'
import Navegator from '../components/navegator'
import Footer from '../components/footer'

function About() {

  return (
    <div>
      <img className={style.logo} src="./public/images/logo.jpg" alt="logo" />
      <Navegator />
      <div>
        <h1>About Yage Travels</h1>
        <p>
          Welcome to Yage Travels, your trusted partner in creating memorable travel experiences.
          Since our establishment, we have been dedicated to helping people explore the world,
          pursue educational opportunities abroad, and find career paths internationally.
        </p>

        <h2>Our Mission</h2>
        <p>
          We strive to make international travel and opportunities accessible to everyone.
          Whether you're a student looking for quality education abroad, a professional
          seeking international career opportunities, or an adventurer wanting to explore
          new horizons, we're here to guide you every step of the way.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Years of experience in international travel and education consulting</li>
          <li>Dedicated team of travel and education experts</li>
          <li>Personalized service tailored to your needs</li>
          <li>Comprehensive support from planning to arrival</li>
          <li>Strong partnerships with universities and employers worldwide</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default About