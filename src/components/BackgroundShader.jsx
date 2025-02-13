import React, { useEffect, useRef } from 'react';

const BackgroundShader = () => {
  const canvasRef = useRef();
  
  useEffect(() => {

    fetch('/shaders/smokeShader.glsl')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch fragment shader ${response.status}`);
        }
        return response.text();
      })
      .then((fragmentShaderSource) => {
        return initWebGL(canvasRef.current, fragmentShaderSource); //should return the cleanup function
      })
      .catch((error) => {
        console.error('Error fetching fragment shader:', error.message);
      });

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10, // Ensure it is behind other elements
      }}
    />
  );
};

const initWebGL = (canvas, fragmentShaderSource) => {
  const gl = canvas.getContext('webgl');
  
  if (!gl) {
    console.error('Unable to initialize WebGL. Your browser may not support it.');
    return;
  }

  console.log("gl initialized: ", gl);
  
  resizeCanvasToDisplaySize(canvas);

  const vertexShaderSource = `
    attribute vec4 a_position;
    void main() {
      gl_Position = a_position;
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
  
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
  
    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Error linking program:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return;
  }

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, 'a_position');

  // Uniform locations
  const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
  const iTimeLocation = gl.getUniformLocation(program, 'iTime');

  // Render loop
  let startTime = Date.now();
  let animationFrameId;

  function render() {
    const currentTime = (Date.now() - startTime) / 1000; // Time in seconds
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(program);
    gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(iTimeLocation, currentTime);

    // Draw the full-screen quad
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  // Cleanup function to stop the animation and release resources
  return () => {
    cancelAnimationFrame(animationFrameId);
    gl.deleteBuffer(positionBuffer);
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
  };
};

const resizeCanvasToDisplaySize = (canvas) => {
  const pixelRatio = window.devicePixelRatio || 1;
  const width = Math.floor(canvas.clientWidth * pixelRatio);
  const height = Math.floor(canvas.clientHeight * pixelRatio);

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true; // Need to resize
  }
  return false; // No need to resize
};



export default BackgroundShader;