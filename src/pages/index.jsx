import style from '../styles/index.module.css'
import Navegator from '../components/navegator'
import Footer from '../components/footer'

function Index() {

  return (
    <>
    <head>
      <title>Yage travels</title>
      <meta name='description' content='travel any place you want' />
      <meta name='keywords' content='shmet, fadi, yage, fadi yagi, travel' />
      <meta name='auther' content='Amen AF' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </head>
      <img className={style.logo} src="travel/public/images/logo.jpg" alt="logo" />
      <Navegator />
      <div className={style.sliderContainer}>
        <div className={style.slider}>
          <img className={style.slidingImgs} src='public/images/airport.jpg' alt="" />
          <img className={style.slidingImgs} src="public/images/serveces.jpg" alt="" />
          <img className={style.slidingImgs} src="public/images/study.jpg" alt="" />
          <img className={style.slidingImgs} src="public/images/trust.jpg" alt="" />
        </div>
        <div className={style.imgDiscreption}>
          <div className={style.tran}>
          </div>
          <p className={style.text}>You are a student and you wish to study in decent university?
            <br />
            Seeking for a jop that match your specialization in some other contry?
            <br />
            Or just looking for the journey of your life? well your are at the right place
          </p>
        </div>
      </div>
      <div className={style.introduction}>
        <h2 className={style.headerIntroduction}>Descover the world with <b>yage travling!</b></h2>
        <p>
          Are you ready to turn your traveling dreams into reality? At <b>yage travels </b>
          we specialize in crafting unforgettable journeys tailored to your unique desires,
          wether you'seeking tranquilbeach escapes, cultural city adventures, or thrilling
          outdoor experiences, our expert team is here to guide you every step of the way
        </p>
      </div>
      <div className={style.fetures}>
        <h2 className={style.feturesHeader}>Fetures of working with us:</h2>
        <ul>
          <li><b>Customized Experiences:</b></li><p>Every traviler is different, and that's why we design personalized itineraries that match your style, intrests, and budget. <br /><br /></p>
          <li><b>Exclusive Deals: </b></li><p>Get sccess to un beatable discounts and special packages that make luxurious trips affordable and exciting. <br /><br /></p>
          <li><b>Seamless Service: </b></li><p>From ticket booking to accommodation and local tours, we handle every detail so you can travel stress-free! <br /><br /></p>
          <li><b>24/7 Support: </b></li><p>Your peace of mind is our priority, our customer service team is available around the clock to assist you.</p>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Index