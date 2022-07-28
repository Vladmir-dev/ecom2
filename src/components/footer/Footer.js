import React from 'react'
import FooterLinks from './FooterLinks'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="w-screen bg-black text-white p-4">
      <ul className="md:flex md:flex-wrap md:justify-around md:items-center ">
        <FooterLinks />
        <ul className="md:p-0 py-[10px] ">
          <li className="text-[16px] font-semibold">Contact Us</li>
          <li className="text-[14px]">55 Gallaxy Enque,</li>
          <li className="text-[14px]">2568 steet, 23568 NY</li>
          <li className="text-[14px]">Phone:(440) 000 000 0000</li>
          <li className="text-[14px]">Email :sales@yousite.com</li>
          <li className="flex mt-[10px] p-[5px] gap-4 items-center">
            <FaFacebookF />
            <AiOutlineTwitter />
            <FaPinterestP />
            <AiFillInstagram />
          </li>
        </ul>
      </ul>

      <hr className="h-[1px] mt-[5px] " />

      <div className="">
        <div className="p-[10px] flex flex-col md:flex-row md:justify-around justify-between">
          <p className="md:text-[12px] text-[13px] order-last text-center py-[5px] md:order-first">
            © 2022 Belle. All Rights Reserved. Ecommerce Software by
            Shopify
          </p>
          <div className="flex gap-4 py-[5px] items-center justify-center">
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_visa.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_master.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_paypal.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_amex.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_jcb.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_ecpay.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

		
	)
}

export default Footer