"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import coursedata from '../../data/course.json'

function Page() {
  const [data, setdata] = useState();

  useEffect(() => {
    const d = coursedata.courses;
    setdata(d)
     // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])


  return (
    <div className=" dark:bg-black/[0.96] min-h-screen py-12 pt-36 ">
      <h2 className="text-center text-white font-bold text-3xl md:text-5xl mb-4">All Courses ({data?.length})</h2>
      <div className="flex  flex-wrap  justify-center">
        {data?.map((item, index) => (
          <CardContainer key={index} className="inter-var me-4 mb-2">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[27rem] h-auto rounded-xl p-6 border  ">
              <div className='flex justify-between' >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-lg font-semibold text-neutral-600 dark:text-white"
                >
                  {item.instructor}
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default Page