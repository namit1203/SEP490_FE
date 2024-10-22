import { Input } from "antd";

const ChangePassword = () => {
  return (
    <div className="w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg  w-full">
        <form id="changePasswordForm" className="space-y-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Current Password *
            </label>
            <Input
              type="password"
              id="currentPassword"
              className="password-input form-input block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              New Password *
            </label>
            <Input
              type="password"
              id="newPassword"
              className="password-input form-input block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Confirm New Password *
            </label>
            <Input
              type="password"
              id="confirmPassword"
              className="password-input form-input block border w-full border-gray-300 rounded-md shadow-sm"
              required
            />
           
          </div>
         
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Apply Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
