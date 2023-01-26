import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const FadeInSectionL=(props)=> {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
    className={`fadeLeft ${isVisible ? 'visibleL' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSectionL