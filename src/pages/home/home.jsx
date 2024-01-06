import { Footer, Header, Hero, Skills, Slider, Works } from "../../components";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kivistudio</title>
        <meta
          name="description"
          content="Kivi provides the best customer servise Internet development services in Tashkent , Uzbekistan and World Wide"
          data-rh="true"
        />
        <link rel="canonical" href="https://kivistudio.uz/" />
        <meta
          name="google-site-verification"
          content="RtUMnrbMpcWsDJIOO3peb6FAKZXLB9lb9IKV8gk8RkA"
        />
        <meta
          name="keywords"
          content="kivistudio, kiwi studio, website design, web design, web application development, website redesign, ui ux design web, landing page design services, create a website"
        />
      </Helmet>

      <Header />

      <main>
        <Hero />
        <Slider />
        <Skills />
        <Works />
      </main>

      <Footer />
    </>
  );
};
