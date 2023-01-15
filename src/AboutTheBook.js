import frontPage from "./images_and_pdfs/BookFront.jpg";

export default function AboutTheBook() {
    return (
        <div id="about-the-book" className=' flex flex-col md:flex-row w-full pt-40 lg:pt-14 3xl:pt-10'>
            <div className='w-full md:w-[50%] md:w-5/12 flex items-center px-10 md:px-0 md:ml-10 lg:ml-20'>
                <img src={frontPage} className=' w-[100%] lg:w-[87%]' alt='book-front-cover'/>
            </div>
            <div className='w-full md:w-7/12 flex justify-center flex-col items-center pt-20 md:pt-0'>
                <h1 className=' text-3xl 3xl:text-4xl font-bold w-full text-center pb-2'>About the Book</h1>
                <div className='flex flex-col w-full items-center justify-center text-center text-base md:text-left sm:text-lg xl:text-lg px-8 sm:px-14 md:px-10 3xl:px-24'>
                    <p>
                        With the emergence of global university rankings, there is increased interest in research universities.
                        The focus of the higher education system in India has traditionally been on educating students and not on research.
                        However, in the last decade or so, there has been a growing appreciation of research in universities and interest in
                        transforming some of the Indian universities to globally competitive research universities.
                    </p>
                    <p>
                        This is the first book that focuses on building research universities in India.
                        It provides a comprehensive and holistic view of a research university and discusses the key dimensions of
                        such a university, including education, research, PhD programme, faculty management, governance, financing and
                        third mission. This book will be of interest to academicians, academic leaders, policymakers, and those who are
                        involved in developing a university in India.
                    </p>
                </div>
            </div>
        </div>
    )
}