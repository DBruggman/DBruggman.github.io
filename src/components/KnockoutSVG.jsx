import React from 'react';


export function TextMask({id, x, y, width, height, text, textProps}){
  return(
      <svg id={id} x={x} y={y} width={width} height={height} >
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            textLength="100%" 
            lengthAdjust="spacing" 
            style={{...textProps, dominantBaseline: "middle"}}
          >
            {text}
          </text>
      </svg>
  )
}

export function ButtonMask({id, x, y, width, height, text, onElementClick}){
  return(
      <svg id={id} x={x} y={y} width={width} height={height}>
          <rect x="0" y="0" width="100%" height="100%" fill="black" stroke="grey" rx="10" onClick={onElementClick} />
          <rect x="3%" y="3%" width="94%" height="94%" fill="white" rx="10" />
          <text x="50%" y="50%" fill="black" 
            textAnchor="middle" dominantBaseline="middle" textLength="85%" lengthAdjust="spacing" 
            style={{font: 'bold 1.2rem sans-serif'}}>
              {text}   
          </text>
      </svg>
  )
}

function KnockoutSVG({ svgElementProps, backgroundColor }) {
  if (svgElementProps) {
    console.log('svgElements:', svgElementProps);
    return (
      <svg style={{ width: '100%', height: '100%' }}>
        <defs>
          <mask id="mask" x="0%" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {
              svgElementProps.map((elementProps) => {

                if(elementProps.id.includes('_button')){
                  return <ButtonMask key={elementProps.id} {...elementProps} />
                }

                if(elementProps.id.includes('_text')){
                  return <TextMask key={elementProps.id} {...elementProps} />
                }

              })
            }
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#mask)"
          fill={backgroundColor}
        />
        { 
          /* generate a hitbox for each '_button'-keyed element in svgElements */
          svgElementProps.filter((elementProps)=>{return elementProps.id.includes('_button')}
          ).map((elementProps) => {
            console.log('Success! id:', elementProps.id);
            const thiskey = elementProps.id + '_hitbox';

            return(<rect 
              key={thiskey}
              x={elementProps.x}
              y={elementProps.y}
              width={elementProps.width}
              height={elementProps.height}
              fill="none"
              stroke="none"
              pointerEvents="all"
              onClick={elementProps.onElementClick}
            />)
          })
        }
      </svg>
    );
  } else {
    console.log('No SVG elements to render');
    return null;
  }
};

export default KnockoutSVG;