import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {items} from './FooterData'

const FooterLinks = () => {

	const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
	
	return (
		<>
		{items.map(item => (
        <div>
          <div className="md:px-3 text-left md:cursor-pointer">
            <h1
              className="md:py-7 py-[10px] flex font-semibold  md:text-[16px] text-[14px] justify-between items-center duration-500"
              onClick={() =>
                heading !== item.head 
                  ? setHeading(item.head)
                  : setHeading('')
              }
            >
              {item.head}
              <span className="text-xl md:hidden">
                {heading !== item.head ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowUp />
                )}
              </span>
            </h1>

            <div>
              {heading !== item.head && (
                <hr className="h-[1px] mt-[5px] bg-gray-500" />
              )}
            </div>

            {item.submenu && (
              <div className=" hidden  md:block mt-[-20px]">
                <div className="bg-black  w-auto px-14 items-center justify-center">
                  {item.subitems.map(mysubitems => (
                    <div>
                      <h1 className="text-[13px] ml-[-50px]">
                        {mysubitems.name}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/*Mobile view*/}
          <div
            className={`
           	 	${heading === item.head ? 'md:hidden' : 'hidden'}
           	 	`}
          >
            {/*sub links*/}
            {item.subitems?.map(mysubitems => (
              <div>
                <div>
                  <h1
                    onClick={() => {
                      subHeading !== mysubitems.head
                        ? setSubHeading(mysubitems.head)
                        : setSubHeading('');
                    }}
                    className="pl-7 py-[10px] text-[13px] flex items-center justify-between duration-500"
                  >
                    {mysubitems.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}	
		</>
	)
}

export default FooterLinks