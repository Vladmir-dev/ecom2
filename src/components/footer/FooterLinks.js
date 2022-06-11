import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import {items} from './FooterData'

const FooterLinks = () => {
	const [heading, setHeading] = useState("")
	const [subHeading, setSubHeading] = useState("")
	return (
		<>
		{items.map(item => (
			<div>
				<div className="px-3">
					<h1 className="text-[17px] block font-semibold">
					{item.head}
					</h1>
					{item.submenu &&
						<div className="top-20 ">
							<div className="flex text-start flex-col  py-2 block w-auto">
								{item.subitems.map(mysubitems => (
									<div>
										<h1>
											{mysubitems.name}
										</h1>
									</div>
									))}
							</div>
						</div>
					}

				</div>
			{/*Mobile View*/}
			
				
			
			</div>
			))}	
		</>
	)
}

export default FooterLinks