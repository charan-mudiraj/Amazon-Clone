import "./css/Footer.css";

function TopPositionScroller() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button id="f-top-scroller-btn" onClick={scrollToTop}>
      <p>Back to Top</p>
    </button>
  );
}
//====================================== Accessibility ==================================
const accessibilities = [
  {
    title: "Get to Know Us",
    items: ["About Us", "Careers", "Press Releases", "Amazon Science"],
  },
  {
    title: "Connect with Us",
    items: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money with Us",
    items: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Project and Build Your Brand",
      "Amazon Global Selling",
      "Become an Affiliate",
      "Fu;filment by Amazon",
      "Advertise your Products",
      "Amazon Pay on Merchants",
    ],
  },
  {
    title: "Lets Us Help You",
    items: [
      "COVID-19 and Amazon",
      "Your Account",
      "Returns Centre",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help",
    ],
  },
];
function Accessibility() {
  function AccessList(access) {
    return (
      <div id="f-access-list">
        <p class="f-access-list-title">{access.title}</p>
        {access.items.map((item) => (
          <p class="f-access-list-item">{item}</p>
        ))}
      </div>
    );
  }
  return <div id="f-access">{accessibilities.map(AccessList)}</div>;
}
//====================================== Accessibility ==================================

//====================================== DNS Country and Language ==================================
const dnsCountries = [
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Poland",
  "Singapore",
  "Spain",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];
const languages = [
  { name: "English", code: "EN" },
  { name: "हिन्दी", code: "HI" },
  { name: "தமிழ்", code: "TA" },
  { name: "తెలుగు", code: "TE" },
  { name: "ಕನ್ನಡ", code: "KN" },
  { name: "മലയാളം", code: "ML" },
  { name: "বাংলা", code: "BM" },
  { name: "मराठी", code: "MR" },
];
function Language() {
  function LangOption(lang) {
    return (
      <option class="f-lang-option">
        <div>
          <input type="radio" />
          <p>
            {lang.name} - {lang.code}
          </p>
        </div>
      </option>
    );
  }
  const logoPath = "icons_&_logos/logo.png";
  return (
    <div id="f-language">
      <img src={logoPath} alt="logo" />
      <select id="f-lang-selector">{languages.map(LangOption)}</select>
    </div>
  );
}
function DNSCountry() {
  return (
    <div id="f-dns-links">
      {dnsCountries.map((country) => (
        <p>{country}</p>
      ))}
    </div>
  );
}
function DNSLang() {
  return (
    <div id="f-dns-lang">
      <Language />
      <DNSCountry />
    </div>
  );
}
//====================================== DNS Country and Language ==================================

//====================================== More on Amazon ==================================
const moaItems = [
  { title: "AdeBooks", desc: "Books, art & collections" },
  { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
  { title: "Audible", desc: "Download Audio Books" },
  { title: "IMDb", desc: "Movies, TV & Celebrities" },
  { title: "Shopbop", desc: "Designer Fashion Brands" },
  { title: "Amazon Buisness", desc: "Everything For Your Buisness" },
  { title: "Prime Now", desc: "2-Hour Delivery on Everyday Items" },
  {
    title: "Amazon Prime Music",
    desc: "100 million songs, ad-free Over 15 million podcast episodes",
  },
];
function MoaItem(item) {
  return (
    <div class="f-moa-item">
      <a href="" class="f-moa-item-title">
        {item.title}
      </a>
      <br />
      <a href="" class="f-moa-item-desc">
        {item.desc}
      </a>
    </div>
  );
}
function MoreOnAmazon() {
  //moa
  return <div id="moa-list-grid">{moaItems.map(MoaItem)}</div>;
}
function Copyright() {
  return (
    <div id="copyright">
      <div id="copyright-links">
        <a href="">Conditions of Use & Sale</a>
        <a href="">Privacy Notice</a>
        <a href="">Internet-Based Ads</a>
      </div>
      <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
    </div>
  );
}
function MoaCopyright() {
  return (
    <div id="f-moa-copyright">
      <MoreOnAmazon />
      <Copyright />
    </div>
  );
}
//====================================== More on Amazon and Copyright ==================================

function Footer(descItems) {
  return (
    <div id="footer">
      <TopPositionScroller />
      <Accessibility />
      <hr id="f-hr" />
      <DNSLang />
      <MoaCopyright />
    </div>
  );
}

export default Footer;
