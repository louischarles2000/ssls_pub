import React from 'react'
import AnimationOnScroll from './AnimationOnScroll';
import { _fade_in, _flup, _fade_right } from '@utils/classes';

export function FadeIn({ className, children }: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <AnimationOnScroll
      classNameNotInView={_fade_in.prev} 
      classNameInView={_fade_in.after}
      className={className}
      >
      {children}
    </AnimationOnScroll>
  )
}

export function FadeRight({ className, children }: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <AnimationOnScroll
      classNameNotInView={_fade_right.prev} 
      classNameInView={_fade_right.after}
      className={className}
      >
      {children}
    </AnimationOnScroll>
  )
}

export function Flup({ className, children }: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <AnimationOnScroll
      classNameNotInView={_flup.prev} 
      classNameInView={_flup.after}
      className={className}
      >
      {children}
    </AnimationOnScroll>
  )
}
