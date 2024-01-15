"use server";

import { colors } from "@/app/styles";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { cn } from "@/lib/utils";

export interface Faq {
  question: string
  answer: string
  index: number
}

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

export async function FAQ({
  answer, question, index
}: Faq) {
  return (
    <AccordionItem value={index.toString()}>
      <AccordionTrigger className={`text-left text-${colors.darkPurple} font-bold`}>
        {question}
      </AccordionTrigger>
      <AccordionContent className={cn(
        `font-bol text-${colors.grayishPurple}`,
      )}>
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
}
