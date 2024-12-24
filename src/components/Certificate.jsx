import React from 'react';
import Footer from './Footer';
import certificate1 from '../assets/certificate/certificate1.jpeg';
import certificate2 from '../assets/certificate/certificate2.png';
import certificate3 from '../assets/certificate/certificate3.jpg';
import certificate4 from '../assets/certificate/certificate4.jpg';
import certificate5 from '../assets/certificate/certificate5.jpg';
import certificate6 from '../assets/certificate/certificate6.jpeg';
import certificate7 from '../assets/certificate/certificate7.jpg';
import certificate8 from '../assets/certificate/certificate8.jpg';
import certificate9 from '../assets/certificate/certificate9.jpg';
import certificate10 from '../assets/certificate/certificate10.jpg';
import certificate11 from '../assets/certificate/certificate11.jpeg';
import certificate12 from '../assets/certificate/certificate12.jpg';

const Certificate = () => {
  return (
    <div className="certificate-container bg-black min-h-screen flex flex-col pt-16">
      {/* Background and other elements */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Certificate Section</h1>
        {/* <p className="text-lg text-gray-200 mb-8">
          You can see my  certificates here.
        </p> */}
        <div className="grid grid-cols-4 gap-3 md:grid-cols-4">
          <img src={certificate1} alt="certificate" className="w-full h-48" />
          <img src={certificate2} alt="certificate" className="w-full h-48" />
          <img src={certificate3} alt="certificate" className="w-full h-48" />
          <img src={certificate4} alt="certificate" className="w-full h-48" />
          <img src={certificate5} alt="certificate" className="w-full h-48" />
          <img src={certificate6} alt="certificate" className="w-full h-48" />
          <img src={certificate7} alt="certificate" className="w-full h-48" />
          <img src={certificate8} alt="certificate" className="w-full h-48" />
          <img src={certificate9} alt="certificate" className="w-full h-48" />
          <img src={certificate10} alt="certificate" className="w-full h-48" />
          <img src={certificate11} alt="certificate" className="w-full h-48" />
          <img src={certificate12} alt="certificate" className="w-full h-48" />
          
         
        </div>

       <div >
       <p className="mt-4 text-lg text-white">
          To view  more certificates, please <a href="https://drive.google.com/drive/folders/1UBrvhXiwj4BdvJvOwwBcrzJ22-itgMl_" className="text-blue-500 hover:underline">click here</a>.
        </p>
       </div>


      </div>
      <Footer />
    </div>
  );
}

export default Certificate;
