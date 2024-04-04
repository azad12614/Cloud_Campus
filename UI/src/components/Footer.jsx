function Footer() {
  return (
    <>
      <footer className="max-w-screen bg-[#00d9ff] text-white px-5">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center logo">
            <h2>
              <span>C</span>loud
              <span>C</span>ampus
            </h2>
          </div>
        </div>
        <hr className="border-[#555] border-3" />
        <h4 className="text-3xl text-[#000] font-medium text-center py-2">
          © Copyright 2024. All Rights Reserved.
        </h4>
      </footer>
    </>
  );
}

export default Footer;
