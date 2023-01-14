import NavBar from "./NavBar";
import AboutTheBook from "./AboutTheBook";
import TableSection from "./TableSection";
import Comments from "./Comments";
import AboutTheAuthor from "./AboutTheAuthor";
import Footer from "./Footer";
export default function Home(){
    return (
        <div className=''>
            <NavBar />
            <AboutTheBook/>
            <TableSection/>
            <Comments/>
            <AboutTheAuthor/>
            <Footer/>
        </div>
    );
}