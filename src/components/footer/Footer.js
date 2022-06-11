import React from 'react'
import FooterLinks from './FooterLinks'

const Footer = () => {
	return (
		<div className="w-screen bg-black text-white p-10">
			<div className="flex justify-around items-center ">
			<FooterLinks />
			</div>
		<hr className="md:h-[2px] md:mt-[5px] "/>
		</div>
		
	)
}

export default Footer