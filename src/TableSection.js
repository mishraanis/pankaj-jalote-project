import chapter1 from './images_and_pdfs/Chapter-1.pdf';
import chapter2 from './images_and_pdfs/Chapter-2.pdf';
import chapter3 from './images_and_pdfs/Chapter-3.pdf';
import chapter4 from './images_and_pdfs/Chapter-4.pdf';
import chapter5 from './images_and_pdfs/Chapter-5.pdf';
import chapter6 from './images_and_pdfs/Chapter-6.pdf';
import chapter7 from './images_and_pdfs/Chapter-7.pdf';
import chapter8 from './images_and_pdfs/Chapter-8.pdf';
import chapter9 from './images_and_pdfs/Chapter-9.pdf';
import chapter10 from './images_and_pdfs/Chapter-10.pdf';
import preface from './images_and_pdfs/Preface.pdf';
import foreword from './images_and_pdfs/Foreword.pdf';
export default function TableSection() {
    return(
        <div className='py-16 md:py-30 3xl:py-44 flex justify-center flex-col'>
        {/*    create a simple table*/}
            <h1 className='text-3xl font-bold font-sans text-center py-5'>Table of Contents</h1>
            <div className='w-full flex justify-center items-center md:hidden'>
                <table className='w-10/12 3xl:w-[55%] border-2 border-black'>
                    <thead>
                        <tr className='text-2xl'>
                            <th className='border-2 border-black'>Contents</th>
                            <th className='border-2 border-black w-2/12'>Pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl py-2.5'>
                                <a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={preface} target='_blank' rel='noreferrer'>
                                    Preface
                                </a>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>ix-xiii</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl py-2.5'>
                                <a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={foreword} target='_blank' rel='noreferrer'>
                                    Foreword
                                </a>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>xv-xix</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter1} target='_blank' rel='noreferrer'>Chapter-1</a><br/>
                                Higher Education and Research in India<br/>
                                <div className='md:pl-5 text-sm'>
                                    1.1 Indian Higher Education System<br/>
                                    1.2 Production of PhDs<br/>
                                    1.3 Research Funding for Universities in India<br/>
                                    1.4 Top Indian and Global Universities
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>1-39</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter2} target='_blank' rel='noreferrer'>Chapter-2</a><br/>
                                Research Universities: Characteristics and Classification<br/>
                                <div className='md:pl-5 text-sm'>
                                    2.1 Research and Research Universities<br/>
                                    2.2 Key Characteristics of a Research University<br/>
                                    2.3 Classifying Research Universities<br/>
                                    2.4 Creating a Research University
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>40-81</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter3} target='_blank' rel='noreferrer'>Chapter-3</a><br/>
                                Education: Delivering High-Quality Learning<br/>
                                <div className='md:pl-5 text-sm'>
                                    3.1 Education in a Research University<br/>
                                    3.2 Curriculum Design<br/>
                                    3.3 Supporting Effective Teaching and Learning
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>82-126</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter4} target='_blank' rel='noreferrer'>Chapter-4</a><br/>
                                Research Management, Ethics and Culture<br/>
                                <div className='md:pl-5 text-sm'>
                                    4.1 Research Administration<br/>
                                    4.2 Research Ethics<br/>
                                    4.3 Building a Research Culture
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>127-156</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter5} target='_blank' rel='noreferrer'>Chapter-5</a><br/>
                                Third Mission: Contribution to Economy and Society<br/>
                                <div className='md:pl-5 text-sm'>
                                    5.1 Third Mission, Its Rise and Challenges<br/>
                                    5.2 Innovation, Entrepreneurship and Technology Transfer<br/>
                                    5.3 Societal Engagement
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>157-185</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter6} target='_blank' rel='noreferrer'>Chapter-6</a><br/>
                                Building a Strong PhD Programme<br/>
                                <div className='md:pl-5 text-sm'>
                                    6.1 Programme Objectives and Graduate Attributes<br/>
                                    6.2 Characteristics of a Strong and Vibrant PhD Programme<br/>
                                    6.3 Case Study: PhD Programme at IIIT-Delhi
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>186-228</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter7} target='_blank' rel='noreferrer'>Chapter-7</a><br/>
                                Faculty Recruitment and Management<br/>
                                <div className='md:pl-5 text-sm'>
                                    7.1 Faculty Work<br/>
                                    7.2 Types of Faculty<br/>
                                    7.3 Faculty Recruitment and Appointment<br/>
                                    7.4 Faculty Administration
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>229-279</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter8} target='_blank' rel='noreferrer'>Chapter-8</a><br/>
                                Governance, Leadership and Administration<br/>
                                <div className='md:pl-5 text-sm'>
                                    8.1 Some Guiding Principles for Governing a Research University<br/>
                                    8.2 University Governance<br/>
                                    8.3 Leadership and Chief Executive<br/>
                                    8.4 Management/Administration
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>280-322</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter9} target='_blank' rel='noreferrer'>Chapter-9</a><br/>
                                Financing the Research University<br/>
                                <div className='md:pl-5 text-sm'>
                                    9.1 Income and Expenditure of a Research University<br/>
                                    9.2 Financing Education<br/>
                                    9.3 Financing Research<br/>
                                    9.4 Financing the Infrastructure<br/>
                                    9.5 Financing a Public Research University
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>323-361</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'><a className='text-blue-700 text-lg active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter10} target='_blank' rel='noreferrer'>Chapter-10</a><br/>
                                The Road Ahead for the Higher Education System and Research Universities<br/>
                                <div className='md:pl-5 text-sm'>
                                    10.1 For the Higher Education System<br/>
                                    10.2 For Research Universities
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>362-406</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='w-full justify-center items-center hidden md:flex '>
                <table className='w-8/12 3xl:w-[45%] border-2 border-black'>
                    <thead>
                        <tr className='text-2xl'>
                            <th className='border-2 border-black'>Contents</th>
                            <th className='border-2 border-black w-2/12'>Pages</th>
                            <th className='border-2 border-black px-0 md:px-4 w-1/12 md:w-3/12' >Download Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl py-2.5'>
                                Preface
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>ix-xiii</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={preface} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl py-2.5'>
                                Foreword
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>xv-xix</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={foreword} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter-1<br/>
                                Higher Education and Research in India<br/>
                                <div className='md:pl-5 text-sm'>
                                    1.1 Indian Higher Education System<br/>
                                    1.2 Production of PhDs<br/>
                                    1.3 Research Funding for Universities in India<br/>
                                    1.4 Top Indian and Global Universities
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>1-39</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter1} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 2<br/>
                                Research Universities: Characteristics and Classification<br/>
                                <div className='md:pl-5 text-sm'>
                                    2.1 Research and Research Universities<br/>
                                    2.2 Key Characteristics of a Research University<br/>
                                    2.3 Classifying Research Universities<br/>
                                    2.4 Creating a Research University
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>40-81</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter2} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 3<br/>
                                Education: Delivering High-Quality Learning<br/>
                                <div className='md:pl-5 text-sm'>
                                    3.1 Education in a Research University<br/>
                                    3.2 Curriculum Design<br/>
                                    3.3 Supporting Effective Teaching and Learning
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>82-126</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter3} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 4<br/>
                                Research Management, Ethics and Culture<br/>
                                <div className='md:pl-5 text-sm'>
                                    4.1 Research Administration<br/>
                                    4.2 Research Ethics<br/>
                                    4.3 Building a Research Culture
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>127-156</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter4} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 5<br/>
                                Third Mission: Contribution to Economy and Society<br/>
                                <div className='md:pl-5 text-sm'>
                                    5.1 Third Mission, Its Rise and Challenges<br/>
                                    5.2 Innovation, Entrepreneurship and Technology Transfer<br/>
                                    5.3 Societal Engagement
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>157-185</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter5} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 6<br/>
                                Building a Strong PhD Programme<br/>
                                <div className='md:pl-5 text-sm'>
                                    6.1 Programme Objectives and Graduate Attributes<br/>
                                    6.2 Characteristics of a Strong and Vibrant PhD Programme<br/>
                                    6.3 Case Study: PhD Programme at IIIT-Delhi
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>186-228</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter6} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 7<br/>
                                Faculty Recruitment and Management<br/>
                                <div className='md:pl-5 text-sm'>
                                    7.1 Faculty Work<br/>
                                    7.2 Types of Faculty<br/>
                                    7.3 Faculty Recruitment and Appointment<br/>
                                    7.4 Faculty Administration
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>229-279</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter7} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 8<br/>
                                Governance, Leadership and Administration<br/>
                                <div className='md:pl-5 text-sm'>
                                    8.1 Some Guiding Principles for Governing a Research University<br/>
                                    8.2 University Governance<br/>
                                    8.3 Leadership and Chief Executive<br/>
                                    8.4 Management/Administration
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>280-322</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter8} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 9<br/>
                                Financing the Research University<br/>
                                <div className='md:pl-5 text-sm'>
                                    9.1 Income and Expenditure of a Research University<br/>
                                    9.2 Financing Education<br/>
                                    9.3 Financing Research<br/>
                                    9.4 Financing the Infrastructure<br/>
                                    9.5 Financing a Public Research University
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>323-361</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter9} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black px-4 text-xl'>Chapter 10<br/>
                                The Road Ahead for the Higher Education System and Research Universities<br/>
                                <div className='md:pl-5 text-sm'>
                                    10.1 For the Higher Education System<br/>
                                    10.2 For Research Universities
                                </div>
                            </td>
                            <td className='border-2 border-black px-0 md:px-4 text-center text-lg'>362-406</td>
                            <td className='border-2 border-black px-0 md:px-4 text-center' ><a className='text-blue-700 text-lg hover:text-red-500 delay-75 transition-all active:underline active:underline-offset-2 active:text-red-700 focus:text-red-700' href={chapter10} target='_blank' rel='noreferrer'>Download</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}