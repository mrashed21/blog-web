import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navber = async () => {
  const { isAuthenticated,getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
  console.log(isUserAuthenticated);
  return (
    <div className="container mx-auto mb-12">
      <div className="navbar ">
        <div className="flex-1">
          <h3 className=" font-bold text-xl">Next Blog</h3>
        </div>
        <div className="flex-none">
          <div className="flex items-center gap-4">
            <Link className="border px-3 py-1.5 rounded-md md:mr-8" href={"/"}>
              Home
            </Link>
              <div>
          {isUserAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link href={"/profile"}>
              <img
                src={
                  user.picture ||
                  "https://i.ibb.co.com/BKsPZDR/Himalayan-Bliss-Trek.jpg"
                } // Fallback to default image
                alt={user.first_name || "User"}
                className="w-8 h-8 rounded-full"
              />
              </Link>
              <LogoutLink className="border px-3 py-1.5 rounded-md">
                Logout
              </LogoutLink>
            </div>
          ) : (
            <div className="flex gap-5">
              <LoginLink className="border px-3 py-1.5 rounded-md">
                Login
              </LoginLink>
              <RegisterLink className="border px-3 py-1.5 rounded-md">
                Register
              </RegisterLink>
            </div>
          )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
