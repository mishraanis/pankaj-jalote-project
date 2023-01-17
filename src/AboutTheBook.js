import frontPage from "./images_and_pdfs/BookFront.jpg";
import backPage from "./images_and_pdfs/BookBack.jpg";
import fullBook from "./images_and_pdfs/full_book.pdf";
export default function AboutTheBook() {
    return (
        <div id="about-the-book" className='flex flex-col w-full items-center'>
            <div className=' flex flex-col items-center md:flex-row w-full pt-40 lg:pt-20 3xl:pt-10'>
                <div className='w-8/12 md:w-1/2 pb-6 md:pb-0 flex items-center md:px-0 md:ml-10 lg:ml-20'>
                    <img src={frontPage} className=' w-[100%] md:w-[87%] border-[0.1rem] border-neutral-900' alt='book-front-cover'/>
                </div>
                <div className='w-8/12 md:w-1/2 flex items-center md:px-0'>
                    <img src={backPage} className=' w-[100%] md:w-[87%] border-[0.1rem] border-neutral-900' alt='book-back-cover'/>
                </div>
            </div>
            <p className='w-8/12 md:w-[87%] text-lg md:text-xl font-sans pt-24 font-semibold'>
                This book is being made publicly available by the author with permission from the publisher (SAGE).
            </p>
            <p className='w-8/12 md:w-[87%] text-lg md:text-xl font-sans pt-5 font-semibold'>
                For downloading the full book, <a href={fullBook} target='_blank' rel='noreferrer' className='text-blue-700 text-lg md:hover:text-red-500 md:delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700'>click here</a>. For downloading specific chapters, links are provided in the table below.
            </p>
        </div>
    )
}