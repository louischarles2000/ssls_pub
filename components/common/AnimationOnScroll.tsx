"use client"

import { InView, useInView } from "react-intersection-observer"

export default function AnimationOnScroll({
  children,
  className,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode
  className?: string
  classNameInView: string
  classNameNotInView: string
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={inView ? className + ' ' + classNameInView : className + ' ' + classNameNotInView}
    >
      {children}
    </div>
  )
}