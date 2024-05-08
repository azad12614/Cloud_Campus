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
                    {/* <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/382487223_328167969724324_6506826883438630314_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hAz9f9aMWsoQ7kNvgFOlY51&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCs1Hzx8QcDtm0UWhYPG1rCOtuZLKlH47iIGWNuRd2feg&oe=663D0AB7" alt="Image" width="100%" /> */}
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/428657186_271488619301144_5631190808680954534_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oNyWGn2BEg4Q7kNvgGIJWDz&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfBXZBG1YV-JlazpnrQTz1Zj8KgokrgOyE_h8K4Hy4rhlw&oe=663D84B6" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZAWyv6_MjYddHxXCZPIHj54euJAbGxYYQy2Z2UZ77UAHtgqwHvqC4wQlnwEHgMESDr2E8XY1FcIeV7NZtksHgvccO72Z8ciw=s1600-rw-v1" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaM7zw7DVoC85VIL_KBIXphrdmyN2q0Fj1fGmn8TqiSt97Zk7U8r4Of5HGgCvd7d0wMHqz26S-CNT-fUsUqbeTXPz3a3RJaYm8=s1600-rw-v1" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/428248525_367638632696329_4642934194703891010_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=txl-Ggv6tuQQ7kNvgGf_6-w&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAzmx83pPApL4gmudSDVUFREyEZjk6__QWnZ4tuCmKrqA&oe=663D8F46" alt="Image" width="100%" />
                    <img src="https://iiucphotography.wordpress.com/wp-content/uploads/2017/05/img_20170504_113607.jpg?w=1024&h=768" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/368637673_268601255933401_9079150192775136121_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lvXU6ALj0lEQ7kNvgEmKT4r&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfC5AnxRVqineuKLXdU3HRg5J8iWP7C1FUlk0_L2nX6w4g&oe=663DA1B6" alt="Image" width="100%" />
                    <img src="https://iiucphotography.wordpress.com/wp-content/uploads/2017/05/img_20170523_111047.jpg?w=1024&h=768" alt="Image" width="100%" />
                    <img src="https://media.licdn.com/dms/image/D5622AQHYZlcoLB2OqA/feedshare-shrink_800/0/1692457350620?e=2147483647&v=beta&t=qrZwSxK2EcdYTHL19MPlFS5PyPa8dOB7DDY_EcD3cMQ" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/359513568_249982194461974_4624911173889172760_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eOkNz010iPcQ7kNvgHpJBed&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfA3VmoCPOlX4Gy-G-ezF2k11GPTYywrP8YZ7WCitILh_A&oe=663DB432" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/326872253_3458468244428030_5649320369624594195_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=l6HwVfWPxFIQ7kNvgHl0Pwj&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDAoHuYRsXtpYI-Ef54MZ99XTQtUCuaCTrcOOPgb0RM0w&oe=663CF966" alt="Image" width="100%" />
                </div>
                <div class="column">
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/321834661_862546201746109_370874259881509352_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bkMObgcwO7sQ7kNvgG6IRxx&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfBy-VunsORKQCimdkiWSMqwq7zKeG2WOosS1Nb8Y60qWw&oe=663D9A12" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/300633720_126069693504876_1583386441990393467_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qF6drxPNRyIQ7kNvgGw_ewq&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDdlFbe4ZSuPRCeYbgYmpTzUxnSYEvZbwWLBGZwc07SYw&oe=663DB790" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/339008851_949730912866932_6853863658442644022_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qo5JFcBThVgQ7kNvgG2GBFi&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDgt_cqEyLij4xwvnH0e0nUjf6A1jDfE8NgxblB0HVRxQ&oe=663DAF04" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/380343908_325424943331960_3708004476422857500_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NsNEFA0Y9IsQ7kNvgGm9tn9&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDG1adOUoV7IaUEVsJgqrWNhB-m4pWtow2EQmcSrbv_ig&oe=663D1869" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/313885524_138839682242893_4503709504243081891_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tvAqC_bugocQ7kNvgFcYSIv&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCRd5cDQVNP2uqmusiY2_OfJ1A7ADQFBD62cJvAdT1PEw&oe=663D01FB" alt="Image" width="100%" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0W-z-W6tkCD27TaASe_9OyfPe414H6cA_g&usqp=CAU" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/433234615_6982469145194854_1961971252509906153_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RdBjNnrw5JoQ7kNvgEv1WMi&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfBz5aBH2chrPmRUwf9sG9ZhWnhwBZY3sxWPl1ki05n6SQ&oe=663D88A4" alt="Image" width="100%" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/CSE_building_of_IIUC.jpg" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/382973928_328167999724321_8354069472719408674_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yp_znsZvI3UQ7kNvgEZd9Mn&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCx3Jh2dmwpt4jkLW3Vb157yfzza4RPVCJs3MkBEXSnxw&oe=663D25B0" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/175863715_5421697607902074_7170074426006614036_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yUnXIvlAyDgQ7kNvgEkHkXb&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCt8jUxjqvK_p0IjEqjq6Le8SLW_ptzn81mE3GG_eHNiA&oe=665F2541" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/428657848_271488605967812_5657422334176361516_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=44VMQzRVP2sQ7kNvgFhRG15&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCidh0Exs5__7x4UoA4aE98a6RMlLZFt84lnfk-INkD2w&oe=663D8BAF" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/440451183_1887821741694705_9104575065473528597_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5JmmpCMQWmwQ7kNvgHwi5UO&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCe1Pm7kb1xiujvONFDKba6wwa-3p5n-dR95Wfk5oIvJA&oe=663D83F4" alt="Image" width="100%" />
                </div>
                <div class="column">
                    <img src="https://media.licdn.com/dms/image/D5622AQFHwBtk9q8WLw/feedshare-shrink_2048_1536/0/1680463600169?e=2147483647&v=beta&t=7B-1L3knbBpZuygb0fDalESYMY_QTYAH1cWjao2kFeo" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/381360837_328168059724315_6559747069259288496_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6P9I6k11w3MQ7kNvgG6bSgQ&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDuR7wLYB--t_YJLw1uoV-k02KrUnE_nfzGtI2K1AjYDQ&oe=663D04D6" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZUh4j6wm1zZK_lJkZRa3vi2579_Pwin9PjmRCNlfytUjX0BGc_RYvXSrp9J9o_ffYXOsr9XGN2Q8H7J6wArvROjh6PYFM78w=s1600-rw-v1" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/381584543_720643340078972_4586815557759334167_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ckB_3cTcU7QQ7kNvgHxjS1N&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAi17EyAr4fACAZEG1wNXwUbM3kTnSfEpIK429CmeD88A&oe=663D84BC" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/338929386_550072887195216_4403897061006981832_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pOjXRPSRefwQ7kNvgEeF4H0&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCno9NCRji7hSTAg0gKH_cbEAEO23PJ9yKaGba9ZvE-5A&oe=663D1CF0" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/361637495_254195564040637_3504958451397811540_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LoQGW_FasBsQ7kNvgHcGD0f&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDlkmIWox2KzhHnFRnF6j8Ojwo26_i2Vz1ylzx0qC-Yqg&oe=663D1D06" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/426525179_407598815114572_6240262864720483627_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yDnpaTkHs_sQ7kNvgFUMXh2&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDieQ-zhdM8Xp7BqZsAxzRxTUMZfmSdhpdhofYgg4VqsA&oe=663CEDEE" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/379468542_325704006637387_9216177892127410078_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D4ZJ8MhqQ-AQ7kNvgGVoTon&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDkHqitAXEgo1pYcMINt6K4u__hXzPSyMIBSfly51v1Sg&oe=663CF4DD" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.18169-9/26993811_1617118368382933_742189701513040612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cO7eh7d2y50Q7kNvgFdoCex&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfByz1Xzq70cYoFawaKM1bTSZ72cZMgRn8exgUoBlABwlQ&oe=665F3806" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/278423583_1649737842049950_5288590445862944853_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OWM_LJWNFisQ7kNvgE6Kr2_&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCsnikEL67aSGlFNE2f2m10XRkYp0KaxTXJKfV9o9mQsg&oe=663DA942" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/326220608_1849455102083766_2960420580867238566_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ihs4VsslGSMQ7kNvgHObjuy&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDBWjB4XPoxuKhIcg5-xew3jR41vQiSlP4M8eh6UACCQA&oe=663D8BEF" alt="Image" width="100%" />
                </div>
                <div class="column">
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/297237900_119298940848618_3526327880911719305_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fUJCl5aE8wsQ7kNvgEBOhuU&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAv5KbtH9G1jNRs7rVYW2UAC-RUYUnVF2-ipjhwQ9PAuw&oe=663CFB65" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/423514718_399089419309312_4392670529269144488_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M_xzJq9IVbsQ7kNvgHmItIH&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfBeRAZXr8imTvgspfE9ejdcwIL8-ZwLmXYK2DImRqe5Ag&oe=663DA3C1" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/382584390_328168029724318_7055754597710727331_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y3QQljfpYKkQ7kNvgG90xan&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCT9AR-5DBX_sUlcXCV5w8Ce_auU6TfLRB_xeQhMSl1gA&oe=663D2435" alt=" Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/425644697_897342162392120_3922120073950576554_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u5N4XLzV_eQQ7kNvgFO3AqX&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCjc2OTBzcNI3kWYjT0DtHegplcq-RnfTreqENRIynyRQ&oe=663D94DE" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/258745082_1061936917907059_3294732308893444362_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hRbfUGK5yFMQ7kNvgFwlbqQ&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDrzBwUcMHf6YTR6ffBjWV1SUQh1lQEXdDkLnErtCTKCQ&oe=663D97D0" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/414035168_377866114754509_199227130397204629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XBOxO_FtC6gQ7kNvgFQs8E8&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfA2RhWorx7qtKWGfgVhaITgtZuhzc3ZVLM4srZ8SDK9Ng&oe=663D0ACF" alt="Image" width="100%" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/IIUC_CENTRAL_LIBRARY_2.jpg" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/297283051_119299144181931_3696307467452752053_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VvKkRhVKnk0Q7kNvgFrz4mM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfC0FgbVXNFBuGcSRGo19hW3sPZQBrZ7x7UYgxITItBhXQ&oe=663D173F" alt="Image" width="100%" />
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/366728460_265618339565026_5225433134219563161_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-xAnuv_cE1kQ7kNvgGmZDRM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAx87DBYo1psz3yUoIgZmtouxt3y9VL7IEZciIztxsojg&oe=663CF0F8" alt="Image" width="100%" />
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZVxXr_0yJHza-pWYTwhed1eVztVZX60yY9oOPtI3WRoy9Ns5cH5uJ6m4BpRHSaIF96r3MXXcIpEyVIEie-vbQFCv1BJNnUdQ=s1600-rw-v1" alt="Image" width="100%" ></img>
                    <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/428654725_271488492634490_6956742420252145898_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4McFGO_E1G4Q7kNvgHz1OhW&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDcRYC6daktZhih6V6pj35x7q_Q6NSOWl979mlqSo-5nQ&oe=663D9C95" alt="Image" width="100%" />
                </div>
            </div>

            <Links></Links>
            <Footer></Footer>
        </>
    );
}

export default Photo;  
