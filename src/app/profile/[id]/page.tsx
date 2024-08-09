import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
        {/* check left menu */}
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-between">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium"> Elva Weaver</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">100</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">45</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium"> 123</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
