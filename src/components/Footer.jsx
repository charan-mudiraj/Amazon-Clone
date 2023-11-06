import "./css/Footer.css";

const descItems = [
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
function DescItem(item) {
  return (
    <div class="f-desc-item">
      <a href="" class="f-desc-item-title">
        {item.title}
      </a>
      <br />
      <a href="" class="f-desc-item-desc">
        {item.desc}
      </a>
    </div>
  );
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
function DescItemsList() {
  return <div id="desc-list-grid">{descItems.map(DescItem)}</div>;
}
function Footer(descItems) {
  return (
    <div id="footer">
      <DescItemsList />
      <Copyright />
    </div>
  );
}

export default Footer;
