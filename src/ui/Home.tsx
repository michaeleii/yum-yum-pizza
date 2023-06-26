import CreateUser from "../features/user/CreateUser";
import { getUsername } from "../features/user/userSlice";
import { useAppSelector } from "../hook";
import Button from "./Button";

function Home() {
  const username = useAppSelector(getUsername);
  return (
    <div className="my-10 flex flex-col justify-center gap-10 px-4 text-center sm:my-16 lg:flex-row">
      <div className="md:mt-5 lg:text-left">
        <h1 className="mb-8 text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {!username ? (
          <CreateUser />
        ) : (
          <div className="mx-auto w-72 text-center">
            <Button to="menu" type="small">
              Continue ordering, {username}
            </Button>
          </div>
        )}
      </div>
      <img
        src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        alt=""
        className=" rounded-lg shadow-xl lg:h-96"
      />
    </div>
  );
}

export default Home;
