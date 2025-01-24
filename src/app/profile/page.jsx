import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  if (!isUserAuthenticated) {
    return redirect("/api/auth/login");
  }
  return (
    <div>
      <div className="card bg-base-100 shadow max-w-4xl mx-auto border-2 border-base-200 ">
        <div className="card-body">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <img
                src={
                  user.picture ||
                  "https://i.ibb.co/BKsPZDR/Himalayan-Bliss-Trek.jpg"
                } // Fallback to default image
                alt={user.given_name || "User"}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-500"
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-800">
                Welcome, {user.given_name || "User"}!
              </h1>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-700">
                User Information
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <strong>Email:</strong> {user.email || "Not provided"}
                </li>
                <li>
                  <strong>First Name:</strong>{" "}
                  {user.given_name || "Not provided"}
                </li>
                <li>
                  <strong>Last Name:</strong>{" "}
                  {user.family_name || "Not provided"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
