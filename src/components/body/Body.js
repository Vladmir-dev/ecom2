import React, { useState, useEffect } from 'react';
import Carousel1 from './carousel1/Carousel1';
import Carousel2 from './carousel2/Carousel2';
import Footer from '../footer/Footer';
import aldo from '../../images/aldo.png';
import dior from '../../images/dior.png';
import klein from '../../images/klein.png';
import dg from '../../images/dg.png';
import burberry from '../../images/burberry.png';

import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';

const Body = () => {
  const [category, setCategory] = useState('women');
  useEffect(() => {
    console.log(category);
  });
  return (
    <div className="md:mt-[40px] mt-[10px] items-center justify-center font-[Poppins,Arial,Tahoma,Verdana,sans-serif]">
      <div className="flex justify-center items-center flex-col  p-[5px]">
        <h1 className="uppercase text-[20px] text-[#222] md:p-[5px] p-[2px]">
          NEW ARRIVALS
        </h1>
        <p className="text-[15px] text-[#222] md:p-[5px] p-[2px]">
          Browse the huge variety of our products
        </p>
      </div>

      <div>
        <ul className="flex uppercase justify-center items-center  p-[12px] md:p-[15px] gap-8 mb-[30px] text-[13px] text-[#444] font-[Poppins,Arial,Tahoma,Verdana,sans-serif]">
          <button
            className={
              category === 'women'
                ? 'text-black font-semibold'
                : 'font-semibold'
            }
            onClick={() => setCategory('women')}
          >
            WOMEN
          </button>
          <button
            className={
              category === 'men'
                ? 'text-black font-semibold'
                : 'font-semibold'
            }
            onClick={() => setCategory('men')}
          >
            MEN
          </button>
          <button
            className={
              category === 'sale'
                ? 'text-black font-semibold'
                : 'font-semibold'
            }
            onClick={() => setCategory('sale')}
          >
            SALE
          </button>
        </ul>
      </div>

      <Carousel1 category={category} />
      <Carousel2 />

      <div className="flex items-center justify-center inline-block w-full md:gap-x-20 mb-[20px] relative">
        <img
          src="https://www.freeiconspng.com/uploads/download-hd-gucci-logo-8.png"
		  alt=""
          className="md:w-[120px] w-[80px]"
        />
        <img src={aldo} alt="" className="md:w-[220px] w-[90px]" />
        <img src={dior} alt="" className="md:w-[100px] w-[90px]" />
        <img src={klein} alt="" className="md:w-[180px] w-[90px]" />
        <img src={dg} alt="" className="md:w-[100px] w-[50px]" />
        <img src={burberry} alt="" className="md:w-[160px] w-[90px]" />
      </div>

      <div className="flex justify-center items-center flex-col mt-[50px] p-[5px]">
        <h1 className="uppercase text-[20px] text-[#222] md:p-[5px] p-[2px] uppercase">
          Featured Collection
        </h1>
        <p className="text-[15px] text-[#222] md:p-[5px] p-[2px]">
          Our most popular products based on sales
        </p>
      </div>

      <div className="grid  md:grid-cols-3 grid-cols-2 place-items-center md:gap-y-2 gap-y-2 relative md:mt-[50px] mt-[30px] md:ml-[350px] md:mr-[350px] md:mb-[20px]">
        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0431/6404/1378/products/2015-03-20_Ashley_Look_20_23515_15565_grande.jpg?v=1594445642" alt=""
            className="w-full md:h-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://www.seagullbook.com/mm5/graphics/00000001/DRESS%20HIGH%20LOW%20HEM%20WAIST%20ELASTIC%20GREEN-5857_640x960.jpg" alt=""
            className="w-full md:h-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://m.media-amazon.com/images/I/61QhUX15j1S._UX569_.jpg" alt=""
            className="w-full md:h-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0369/7452/6600/products/29_44a7b3c0-f28f-483b-ac55-797ed19b51a8_400x.jpg?v=1651787827" alt=""
            className="w-full md:h-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0017/3611/4234/products/2014_09_27_Lana_Look_30_05_1024x1024@2x.jpg?v=1554807760" alt=""
            className="w-full md:h-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
            className="w-full md:h-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&w=1000&q=80"
			alt=""
            className=" md:h-full w-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300657/97290140-women-style-fashion-girl-in-long-black-dress-posing-outdoors-portrait-of-beautiful-fashionable-femal.jpg"
            alt=""
			className="md:h-full w-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>

        <div className="md:w-[390px] md:h-[550px] w-[180px] h-[400px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjPMQc7SaV5_V5TCy_H-VRbYShIM6qB-ZOg&usqp=CAU"
			alt=""
            className="w-full md:h-full h-[300px]"
          />
          <div className="md:hidden text-center justify-center items-center p-2">
            <h4 className="text-[13px]">Camelia Reversible Jacket</h4>
            <p className="text-[14px] p-[2px]"> $500.00 </p>
            <div className="flex justify-center items-center p-2 gap-4 text-[18px]">
              <AiOutlineHeart />
              <BsBag />
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-2 mb-[20px] mt-[10px]">
        <a
          href="/"
          className="md:w-[150px] w-[100px] bg-black text-white pt-[10px] pb-[10px] pl-[10px] pr-[10px]  cursor-pointer text-center text-[14px]"
        >
          SHOP ALL
        </a>
      </div>

      <div className="hidden md:visible md:w-screen md:flex md:justify-around md:items-center p-[30px] bg-gray-200">
        <div className="flex justify-center gap-4">
          <h4 className="uppercase font-bold p-2">
            Sign up for deal
          </h4>
          <div className="flex items-center">
            <input
              placeholder="EMAIL ADDRESS"
              className="w-[500px] p-2"
            />
            <a
              href="/"
              className="w-[120px] h-[45px] bg-black uppercase text-white text-center pt-[10px] pr-[10px] pl-[10px]"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <h4 className="font-bold uppercase">be in touch</h4>
          <div className="flex gap-4">
            <FaFacebookF />
            <AiOutlineTwitter />
            <FaPinterestP />
            <AiFillInstagram />
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center p-10 bg-gray-200">
        <div className="flex flex-col p-4">
          <h4 className="font-bold uppercase text-center">
            Sign up for deal
          </h4>
          <div className="flex flex-col mt-[5px] items-center">
            <input
              placeholder="EMAIL ADDRESS"
              className="border-solid p-[5px] w-[250px] border-gray-50 m-[5px]"
            />
            <a
              href="/"
              className="mt-[5px] w-[250px] bg-black text-white p-[5px] text-center"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="">
          <h4 className="font-semibold uppercase text-center flex-col">
            be in touch
          </h4>
          <div className="flex mt-[10px] p-[5px] gap-4 items-center">
            <FaFacebookF />
            <AiOutlineTwitter />
            <FaPinterestP />
            <AiFillInstagram />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
