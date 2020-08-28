import React, { useState, createRef, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Svg = (props) => {
    const [inViewRef, inView] = useInView({
        triggerOnce: true
    })
    const pathRef = createRef()
    const [pathLength, setPathLength] = useState()

    useEffect(
        () => {
            if (pathRef.current) {
                setPathLength(pathRef.current.getTotalLength())
            }
        },
        [pathRef]
    )

    return (
        <Wrapper ref={inViewRef} pathLength={pathLength}>
            <svg
                className={inView ? 'animated visible' : 'animated'}
                viewBox='0 0 861.639 777.67'
                {...props}
        >
            <g fill="none" strokeWidth={1.818}>
                    <path
                        ref={pathRef}
                    d="M1.205 4.277l430.107 770.668V516.272L217.98 389.61l213.333-128.445 215.054 126.661L429.592 519.84l3.44 249.753L859.7 4.277 644.646 136.289l1.72 247.97-1.72-251.537L431.312 6.06 216.26 134.506l1.72 251.537 213.333-124.877V4.276L856.26.71z"
                    stroke="red"
                />
                    <path
                        d="M216.259 134.506L1.205 4.276" stroke="red" />
            </g>
            </svg>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .animated {
    max-width: 80px;
    width: 100%;
    height: 100%;
    stroke-dasharray: ${props => props.pathLength};
    stroke-dashoffset: ${props => props.pathLength};
    position: fixed;
left: 10px;
top: -43%;
z-index: 99;
  }
  .animated.visible {
    
    animation: draw 5s linear forwards;
   
  }
  @keyframes draw {
    from {
      stroke-dashoffset: ${props => props.pathLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default Svg;