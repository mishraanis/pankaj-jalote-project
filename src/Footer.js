
export default function Footer() {
    return (
        <div className='w-full bg-white'>
            <div className='w-full flex py-5 justify-between border-2 h-full border-t-gray-700 '>
                <div className='w-full text-base md:text-lg flex justify-center md:justify-end items-center pr-0 md:pr-5 px-2 min-w-fit font-sans font-medium md:pl-0'>
                    Copyright &#169; Pankaj Jalote. All rights reserved. Contact the author: &nbsp;
                    <a href='mailto:jalote@iiitd.ac.in' target='_blank' rel='noreferrer' className='text-blue-700 text-lg md:hover:text-red-500 md:delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700'>jalote@iiitd.ac.in</a>
                </div>
            </div>
        </div>
    )
}