function Links() {
  const myli = {
    backgroundColor: "#333",
    color: "#FFF",
    padding: "1rem",
    width: "30rem",
    margin: "1rem",
    boxShadow: "0px 4px gray",
    marginLeft: "auto",
    marginRight: "auto",
  }
  return (
    <>
      <div className="py-48 px-8">
        <h1 className="text-6xl font-bold text-center text-[#FFF]">General Links</h1>
        <hr className="border-[#FFF] border-4" />
        <ul className="text-3xl grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 text-center justify-center">

          <a href={`https://www.iiuc.ac.bd/home/transport`} target="_blank">
            <li style={myli} >
              Bus Schedule
            </li>
          </a>

        </ul>
      </div>
    </>
  );
}

export default Links;