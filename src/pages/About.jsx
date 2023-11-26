import Header from "../components/Header";
import Footer from "../components/Footer";
import "./css/About.css";

function AboutContent() {
  const faceImgPath = "other_images/pp.jpg";
  const iconsDir = "icons_&_logos/";
  const icons = [
    {
      imgPath: iconsDir + "twitter.png",
      link: "https://twitter.com/_charan_mudiraj?t=FkppQqe4UIRLmsZdzomz7w&s=09",
    },
    {
      imgPath: iconsDir + "linkedin.png",
      link: "https://www.linkedin.com/in/charan-mudiraj-868086230",
    },
    {
      imgPath: iconsDir + "instagram.png",
      link: "https://instagram.com/h9ck_berry?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
      imgPath: iconsDir + "whatsapp.png",
      link: "https://wa.me/qr/H67AUKBDVVBUO1",
    },
  ];
  function Icon(props) {
    return (
      <a id="social-icon" href={props.link}>
        <img src={props.imgPath} alt="" />
      </a>
    );
  }
  return (
    <div id="a-ac">
      <div id="ac-about-card">
        <span>
          <img src={faceImgPath} alt="" />
        </span>
        <p>Admin</p>
        <p>Charan M</p>
        <hr />
        <div id="ac-icons-flex">{icons.map(Icon)}</div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div id="about">
      <Header />
      <AboutContent />
    </div>
  );
}

export default About;
