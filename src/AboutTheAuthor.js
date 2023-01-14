import authorImage from './images_and_pdfs/PankajJalote.jpg';
export default function AboutTheAuthor() {
    return(
        <div className='w-full flex flex-col justify-center items-center py-40'>
            <h1 className='font-sans font-bold text-center text-3xl py-5'>About the Author</h1>
            <div className='w-full flex justify-evenly 3xl:w-10/12 items-center font-sans font-semibold'>
                <div className='w-[20%] flex justify-center items-center '>
                    <img src={authorImage} className='w-full rounded-full shadow-lg max-w-full h-auto align-middle border-none' alt='author'/>
                </div>
                <div className='w-5/12 text-lg 3xl:text-xl '>
                    <span className='text-2xl text-violet-800'>Pankaj Jalote</span> is the Founding Director (2008-2018) and Distinguished Professor of Indraprastha Institute
                    of Information Technology Delhi (IIIT-Delhi).
                </div>
            </div>
        </div>
    )
}