import HorizontalScrollComponent from "./HorizontalScrollComponent";

export default function Comments() {
    return(
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='font-sans font-bold text-center text-3xl py-5 pb-2'>Advance Comments (from the book)</h1>
            <div className='w-full'>
                <HorizontalScrollComponent/>
            </div>
        </div>
    )
}