const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white border-t-4 border-red-800">
      <div className="py-[24px] grid grid-cols-4 justify-items-center container mx-auto">
        <div className="flex flex-col gap-4">
          <span>Over Rijschool Houben</span>
          <p>
            De rijopleiding nieuwe stijl is tot stand gekomen door verschillende
            les- en werkvormen, vaardigheden, kennis en gevolgde cursussen
            (onder andere de RIS-opleiding) samen te voegen tot een nieuwe
            rijopleiding, waar je als cursist veel lees meer…
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span>Menu</span>
          <ul>
            <li>Home</li>
            <li>Prijzen</li>
            <li>Theorie</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span>Handige links</span>
          <ul>
            <li>F.A.Q</li>
            <li>Algemene voorwaarden</li>
            <li>Privacy verklaring</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span>Contact</span>
          <ul>
            <li>06 41227088</li>
            <li>Haagstraat 26</li>
            <li>6151 ED Munstergeleen</li>
            <li>Nederland</li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t font-light py-[24px]">
        <span>Copyright rijschoolhouben.nl – Made By Ryan</span>
      </div>
    </footer>
  );
};

export default Footer;
