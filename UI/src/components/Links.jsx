import "./Links.css";

function Links() {
  return (
    <>
      <div className="gLinks">
        <h1>General Links</h1>
        <hr />
        <ul>

          <a href={`https://opac.iiuc.ac.bd/`} target="_blank">
            <li className="text-4xl">
              Library
            </li>
          </a>

          <a href={`https://www.iiuc.ac.bd/alumni/adirectory`} target="_blank">
            <li className="text-4xl">
              Alumni List
            </li>
          </a>

          <a href={`https://www.facebook.com/IIUCCPS/`} target="_blank">
            <li className="text-4xl">
              IIUC Competitive Programming Society
            </li>
          </a>

          <a href={`https://www.facebook.com/groups/1134953564340876/?ref=share`} target="_blank">
            <li className="text-4xl">
              IIUC Competitions Hub
            </li>
          </a>

          <a href={`https://www.facebook.com/computerclubiiuc2021/`} target="_blank">
            <li className="text-4xl">
              IIUC Computer Club
            </li>
          </a>

          <a href={`https://t.me/+-0idhqk_Od1jMDhl`} target="_blank">
            <li className="text-4xl">
              Class Records(1st-3rd MID)
            </li>
          </a>

          <a href={`https://drive.google.com/drive/folders/1j6P06WLqRLESwiWYiPlTa4ui-m8g8C1i`} target="_blank">
            <li className="text-4xl">
              CSE Resources
            </li>
          </a>

          <a href={`https://t.me/quesbankofcse`} target="_blank">
            <li className="text-4xl">
              Que Bank
            </li>
          </a>

          <a href={`https://www.iiuc.ac.bd/home/career/`} target="_blank">
            <li className="text-4xl">
              Job offer
            </li>
          </a>

        </ul>
      </div>
    </>
  );
}

export default Links;
