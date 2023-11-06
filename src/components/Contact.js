const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact page</h1>
      <div className=" flex justify-center">
        <form className=" ">
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="name"
          />
          <input
            type="text"
            className=" border border-black p-2 m-2"
            placeholder="message"
          />
          <button className="border border-black p-2 m-2 bg-gray-100 rounded-r-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
