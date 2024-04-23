function Links() {
  const myli = {
    backgroundColor: "#01303f",
    color: "#d4f0fc",
    width: "30rem",
    padding: "auto",
    margin: "1rem",
    boxShadow: "0px 4px #02a9f7",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginLeft: "auto",
    marginRight: "auto",
  }
  return (
    <>
      <div className="p-12 pb-36">
        <h1 className="text-6xl font-bold text-center text-[#01303f]">General Links</h1>
        <hr className="border-[#01303f] border-4" />
        <ul className="text-3xl grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 text-center justify-center">

          <a href={`https://www.iiuc.ac.bd/academic/bcalendar/`} target="_blank">
            <li style={myli} className="text-4xl">
              Academic Calendar
            </li>
          </a>

          <a href={`https://www.iiuc.ac.bd/home/transport`} target="_blank">
            <li style={myli} className="text-4xl">
              Bus Schedule
            </li>
          </a>

          <a href={`https://opac.iiuc.ac.bd/`} target="_blank">
            <li style={myli} className="text-4xl">
              Library
            </li>
          </a>

          <a href={`https://www.iiuc.ac.bd/alumni/adirectory`} target="_blank">
            <li style={myli} className="text-4xl">
              Alumni List
            </li>
          </a>

          <a href={`https://www.facebook.com/IIUCCPS/`} target="_blank">
            <li style={myli} className="text-4xl">
              IIUC Competitive Programming Society
            </li>
          </a>

          <a href={`https://www.facebook.com/groups/1134953564340876/?ref=share`} target="_blank">
            <li style={myli} className="text-4xl">
              IIUC Competitions Hub
            </li>
          </a>

          <a href={`https://www.facebook.com/computerclubiiuc2021/`} target="_blank">
            <li style={myli} className="text-4xl">
              IIUC Computer Club
            </li>
          </a>

          <a href={`https://t.me/+-0idhqk_Od1jMDhl`} target="_blank">
            <li style={myli} className="text-4xl">
              Class Records(1st-3rd MID)
            </li>
          </a>

          <a href={`https://drive.google.com/drive/folders/1j6P06WLqRLESwiWYiPlTa4ui-m8g8C1i`} target="_blank">
            <li style={myli} className="text-4xl">
              CSE Resources
            </li>
          </a>

          <a href={`https://t.me/quesbankofcse`} target="_blank">
            <li style={myli} className="text-4xl">
              Que Bank
            </li>
          </a>

          <a href={`https://www.iiuc.ac.bd/home/career/`} target="_blank">
            <li style={myli} className="text-4xl">
              Job offer
            </li>
          </a>

        </ul>
      </div>
    </>
  );
}

export default Links;
