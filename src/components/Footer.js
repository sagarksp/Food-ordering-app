// const currYear = new Date().getFullYear();

// const Footer = () => {
//   return (
//     <footer className="footer border border-solid border-black  h-20 bg-slate-400 text-center ">
//       <p className=" mt-7 font-semibold"  >
//         Copyright &copy; {currYear}, Made with 💗 by <strong>Sagar kashyap</strong>
//       </p>
//     </footer>
//   );
// };

// export default Footer;
// src/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Sagar Kashyap Website . All rights reserved.</p>
        <div className="mt-2">
          <a href="#privacy" className="text-gray-400 hover:text-gray-300 mx-2">Privacy Policy</a>
          <a href="#terms" className="text-gray-400 hover:text-gray-300 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
