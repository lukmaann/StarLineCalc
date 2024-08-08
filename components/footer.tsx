const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-black text-gray-800 text-xs m-2 p-2 flex justify-center items-center ">
        <p>Lukn Developments &copy; {currentYear} All Rights Reserved</p>
      </footer>
    );
  };
  
  export default Footer;
  