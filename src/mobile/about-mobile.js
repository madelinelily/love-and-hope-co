import './about-mobile.css';
import carol from './carol.png';
import ReviewWidgetMobile from './reviewwidget-mobile.js'
const AboutMobile = () => {
  console.log(`isMobile`)
    return(
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Serif+Text:ital@0;1&family=MonteCarlo&display=swap');
            </style>
            <div className="about-mobile">
                <div className="about-banner-mobile">
                    <h1>ABOUT</h1>
                </div>
                <div className="about-body-mobile">
                    <div className="about-opener-mobile">
                        <div className="about-carol-mobile">
                            <div className="about-carol-text-container-mobile">
                                <h2>Hi, I'm Carol!</h2>
                                <div className="about-body-blurb-mobile about-carol-text-mobile">
                                    Originally from Florida, I now live in the South Bend, Indiana 
                                </div>
                                
                            </div>
                            <img src={carol} className="carol-image-mobile" alt="carol"></img>
                        </div>
                        <div className="about-body-blurb-mobile about-carol-text-mobile">area.  I have been ordained to officiate weddings since 2017.  I founded Love & Hope Co. in 2020 to provide wedding services to any and all who wish to marry.</div>
                        <div className="about-body-blurb-mobile about-carol-text-mobile">
                            Love & Hope Co. is <b>LGBTQ+ friendly and affirming.</b> Love is always welcome here! 
                        </div>
                    </div>
                    <div className="about-main-mobile">
                        <div className="about-main-text-mobile">
                            <div className="about-body-blurb-mobile">
                                <b>Love & Hope Co.</b> is a team of professional, ordained wedding officiants dedicated to providing exceptional wedding services. 
                            </div>
                            <br/>
                            <div className="about-body-blurb-mobile">
                                Whether you prefer a non-religious or faith-based service, we are here to serve all who wish to marry. Our expertise lies in transforming intimate weddings into extraordinary experiences that exceed your wildest dreams. Our skilled celebrants will collaborate closely with you, crafting a ceremony and script that authentically capture your emotions and reflect your unique love story.
                            </div>
                            <br/>
                            <div className="about-body-blurb-mobile">
                                If time is of the essence and you're looking to tie the knot quickly, we're up for the challenge! We thrive on the excitement of last-minute weddings and will ensure that your spontaneous union is just as meaningful and unforgettable as any other.
                            </div>
                            <br/>
                            <div className="about-body-blurb-mobile">
                                Planning a wedding for the upcoming year? Let's embark on this journey together! Our team is ready to assist you in creating a personalized service that sets the stage for a lifetime of love and happiness. From meticulously planning the ceremony details to curating a heartfelt atmosphere, we will guide you through the process, making it an enjoyable and stress-free experience.
                            </div>
                            <br/>
                            <div className="about-body-blurb-mobile">
                                Love & Hope Co. is dedicated to bringing your wedding vision to life. We are passionate about celebrating love in all its forms and creating moments that are uniquely yours. Contact us today to start planning your perfect ceremony, where love, hope, and cherished memories await.
                            </div>
                            <div className="about-body-blurb-mobile loads-of-love-mobile">
                                <b>Every wedding gets loads of love and the same level of care and attention.</b>
                            </div>
                        </div>
                    </div>
                        <div className="reviews-container-mobile">
                            <div className="reviews-title-mobile">
                                Reviews
                            </div>
                            <ReviewWidgetMobile></ReviewWidgetMobile>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMobile;