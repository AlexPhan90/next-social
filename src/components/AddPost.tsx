"use client";

import prisma from "@/lib/client";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { useState } from "react";
import AddPostButton from "./AddPostButton";
import { CldUploadWidget } from "next-cloudinary";
import { addPost } from "@/lib/actions";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      ></Image>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form
          action={(formData) => addPost(formData, img?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            placeholder="What's on your mind?"
            className=" flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end "
          ></Image>
          <AddPostButton />
        </form>
        {/* POST OPTION */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image
                    src="/addimage.png"
                    alt=""
                    width={20}
                    height={20}
                  ></Image>
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20}></Image>
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20}></Image>
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20}></Image>
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
