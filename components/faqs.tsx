"use server";

import { colors } from "@/app/styles";
import * as fs from "fs/promises";
import Image from "next/image";
import { FAQ, Faq } from "./faq";
import { Accordion } from "./ui/accordion";

const variants = {
  text: [
    `text-[#ffffff]`, `text-[#f9f0ff]`,
    `text-[#8c6991]`, `text-[#2f1533]`,
  ],
  background: [
    `bg-[#ffffff]`, `bg-[#f9f0ff]`,
    `bg-[#8c6991]`, `bg-[#2f1533]`,
  ],
}

export async function FAQs() {
  const data = await fs.readFile(process.cwd() + '/app/data.json', 'utf-8')
  const faqs = JSON.parse(data) as Faq[]

  return (
    <div className={`rounded-md bg-${colors.white}`}>
      <div className={`p-6`}>
        <div className={`flex flex-row gap-5 items-center`}>
          <div>
            <Image
              src={`/assets/images/icon-star.svg`}
              alt="icon star"
              width={2}
              height={2}
              className={`w-auto h-auto`}
            />
          </div>
          <h1 className={`text-${colors.darkPurple} font-bold text-4xl`}>
            FAQs
          </h1>
        </div>

        <div className={`w-[28ch] md:w-[48ch]`}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => <FAQ key={idx}
              index={idx}
              answer={faq.answer}
              question={faq.question}
            />)}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
