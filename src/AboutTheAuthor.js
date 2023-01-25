import PankajJalote from './images_and_pdfs/PankajJalote.jpg'
export default function AboutTheAuthor() {
    return(
        <div className='w-full flex flex-col justify-center items-center pb-20 pt-12'>
            <h1 className='font-sans font-bold text-center text-3xl py-3 md:pt-5 md:pb-2'>About the Author</h1>
            <div className='w-full flex justify-evenly 3xl:w-10/12 items-center font-sans font-semibold'>
                <img src={PankajJalote} alt='pankaj_jalote_image' className='rounded-[3rem] w-2/12'/>
                <div className='w-9/12 md:w-7/12 text-base md:text-lg 3xl:text-xl'>
                    <span className='text-2xl text-violet-800'>Pankaj Jalote</span> was the founding Director of IIIT-Delhi (from 2008 to 2018),
                    which is now a highly-respected institution globally with high quality research and education, and has been ranked in BRICS
                    top 200 universities. Prior to this, he has been a Chair Professor at IIT Delhi, Professor and head of CS Department,
                    IIT Kanpur, and Assistant Professor at University of Maryland at college Park. He was also Vice President at Infosys for
                    two years, and Visiting Researcher at Microsoft, Redmond, for a year. He has a B.Tech. from IIT Kanpur, MS from Pennsylvania
                    State University, and Ph.D. from University of Illinois at Urbana-Champaign. He is the author of five books including the
                    highly acclaimed CMM in Practice, which has been translated in Chinese, Japanese, Korean etc, and the best selling text on
                    Software Engineering. He is a Fellow of the IEEE and INAE.<br/>
                    To know more about him, <a href='https://www.iiitd.edu.in/~jalote/' target='_blank' rel='noreferrer' className='text-blue-700 text-lg md:hover:text-red-500 md:delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700'>click here</a>.
                </div>
            </div>
        </div>
    )
}