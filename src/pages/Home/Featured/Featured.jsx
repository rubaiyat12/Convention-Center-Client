import SectionsTitle from "../../../components/SectionsTitle/SectionsTitle";
import featureImg from '../../../assets/images/wedding.png';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionsTitle subHeading="Check It Out" heading="Featured Picture">
            </SectionsTitle>
            <div className="md:flex justify-center bg-slate-500
            bg-opacity-40 items-center
            py-20 px-36">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 19, 2023</p>
                    <p className="uppercase">A Journey of Love</p>
                    <p>Love, joy, and anticipation filled the air as
                        friends and family gathered to witness and celebrate
                        . The setting was picturesque,
                        with nature beauty enhancing the already magical atmosphere.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Book Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;