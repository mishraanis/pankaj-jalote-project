import frontPage from "./images_and_pdfs/BookFront.jpg";

export default function AboutTheBook() {
    return (
        <div id="about-the-book" className='flex w-full pt-52 lg:pt-14 3xl:pt-10'>
            <div className='w-[50%] md:w-5/12 flex items-center ml-10 lg:ml-20'>
                <img src={frontPage} className=' w-[100%] md:w-[87%]' alt='book-front-cover'/>
            </div>
            <div className='w-7/12 flex justify-center flex-col items-center'>
                <h1 className=' text-2xl 3xl:text-4xl font-bold w-full text-center pb-2'>About the Book</h1>
                <div className=' text-base xl:text-lg px-5 pr-10 md:px-10 3xl:px-24'>
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