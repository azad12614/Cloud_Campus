import Navbar from "../../components/Navbar";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import "./Photo.css";

function Photo() {
    return (
        <>
            <Navbar />
            <Section text={"Gallery"} />
            <div id="flexbox">
                <div class="column">
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZUALQ0-V86FsJqQ2KGuuXYpFlGARgDdaeBRuKSamJ4iSl2w1s5h6sep2Hki4DMkX_QY2SzVEso6OoHi5dVDchojh2WD1iuNtQ=s1600-rw-v1" alt="Image" width="100%" />
                    <img src="https://iiucphotography.wordpress.com/wp-content/uploads/2017/05/img_20170504_113607.jpg?w=1024&h=768" alt="Image" width="100%" />
                    <img src="https://iiucphotography.wordpress.com/wp-content/uploads/2017/05/img_20170523_111047.jpg?w=1024&h=768" alt="Image" width="100%" />
                    <img src="" alt="Image" width="100%" />
                </div>
                <div class="column">
                    <img src="" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/175863715_5421697607902074_7170074426006614036_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yUnXIvlAyDgQ7kNvgEkHkXb&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCt8jUxjqvK_p0IjEqjq6Le8SLW_ptzn81mE3GG_eHNiA&oe=665F2541" alt="Image" width="100%" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0W-z-W6tkCD27TaASe_9OyfPe414H6cA_g&usqp=CAU" alt="Image" width="100%" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/CSE_building_of_IIUC.jpg" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZVxXr_0yJHza-pWYTwhed1eVztVZX60yY9oOPtI3WRoy9Ns5cH5uJ6m4BpRHSaIF96r3MXXcIpEyVIEie-vbQFCv1BJNnUdQ=s1600-rw-v1" alt="Image" width="100%" ></img>
                </div>
                <div class="column">
                    <img src="https://media.licdn.com/dms/image/D5622AQFHwBtk9q8WLw/feedshare-shrink_2048_1536/0/1680463600169?e=2147483647&v=beta&t=7B-1L3knbBpZuygb0fDalESYMY_QTYAH1cWjao2kFeo" alt="Image" width="100%" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/IIUC_CENTRAL_LIBRARY_2.jpg" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZUh4j6wm1zZK_lJkZRa3vi2579_Pwin9PjmRCNlfytUjX0BGc_RYvXSrp9J9o_ffYXOsr9XGN2Q8H7J6wArvROjh6PYFM78w=s1600-rw-v1" alt="Image" width="100%" />
                    <img src="" alt="Image" width="100%" />
                </div>
                <div class="column">
                    <img src="" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZAWyv6_MjYddHxXCZPIHj54euJAbGxYYQy2Z2UZ77UAHtgqwHvqC4wQlnwEHgMESDr2E8XY1FcIeV7NZtksHgvccO72Z8ciw=s1600-rw-v1" alt="Image" width="100%" />
                    <img src="https://media.licdn.com/dms/image/D5622AQHYZlcoLB2OqA/feedshare-shrink_800/0/1692457350620?e=2147483647&v=beta&t=qrZwSxK2EcdYTHL19MPlFS5PyPa8dOB7DDY_EcD3cMQ" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.18169-9/26993811_1617118368382933_742189701513040612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cO7eh7d2y50Q7kNvgFdoCex&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfByz1Xzq70cYoFawaKM1bTSZ72cZMgRn8exgUoBlABwlQ&oe=665F3806" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaM7zw7DVoC85VIL_KBIXphrdmyN2q0Fj1fGmn8TqiSt97Zk7U8r4Of5HGgCvd7d0wMHqz26S-CNT-fUsUqbeTXPz3a3RJaYm8=s1600-rw-v1" alt="Image" width="100%" />
                </div>
            </div>

            <Links></Links>
            <Footer></Footer>
        </>
    );
}

export default Photo;  
