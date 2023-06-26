import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 flex justify-center gap-10 px-4 text-center sm:my-16">
      <div className="md:mt-5 md:text-left">
        <h1 className="mb-8 text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <CreateUser />
      </div>
      <img
        src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        alt=""
        className=" hidden h-96 rounded-lg shadow-xl md:block"
      />
    </div>
  );
}

export default Home;
