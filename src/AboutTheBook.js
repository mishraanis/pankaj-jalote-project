import frontPage from "./images_and_pdfs/BookFront.jpg";
import fullBook from "./images_and_pdfs/full_book.pdf";
export default function AboutTheBook() {
    return (
        <div id="about-the-book" className='flex flex-col w-full items-center'>
            <div className=' flex flex-col items-center md:flex-row md:justify-center w-full pt-40 lg:pt-20 3xl:pt-40'>
                <div className='w-8/12 md:w-8/12 pb-6 md:pb-0 flex flex-col flex-col-reverse md:flex-row items-center justify-center md:px-0'>
                    <div className='flex flex-col md:pr-20 w-full'>
                        <p className='text-xl'>
                            From the Back Cover:
                        </p>
                        <p className=' font-sans font-medium text-center md:text-left '>
                            This is the first book that focuses on building research universities in India.
                            It provides a comprehensive and holistic view of a research university and
                            discusses the key dimensions of such a university, including education,
                            research, PhD programme, faculty management, governance, financing and
                            third mission. This book will be of interest to academicians, academic
                            leaders, policymakers, and those who are involved in developing a university
                            in India.
                        </p>
                        <p className=' pt-2 font-sans font-medium text-center md:text-left'>
                            This book is being made publicly available by the author with permission from the publisher (SAGE).
                        </p>
                        <p className='pt-2 font-sans font-medium text-center md:text-left'>
                            For downloading the full book, <a href={fullBook} target='_blank' rel='noreferrer' className='text-blue-700 text-base md:hover:text-red-500 md:delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700'>click here</a>. For downloading specific chapters, links are provided in the table below.
                        </p>
                    </div>
                    <img src={frontPage} className=' w-[100%] mb-10 md:mb-0 md:w-[42%] border-[0.1rem] border-neutral-900' alt='book-front-cover'/>
                </div>
            </div>
        </div>
    )
}