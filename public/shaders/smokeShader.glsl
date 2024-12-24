precision highp float;

uniform vec2 iResolution; // Canvas resolution (passed from JS)
uniform float iTime; // Time since start (passed from JS)

float fbm( in vec2 p ){
    float z = 0.;
    float amplitude = 1.;
    float frequency = 2.5;
    
    float t = p.x;
    float u = p.y;
    
    z += sin(t*frequency*0.9375)*3.5;
    z += sin(t*frequency*1.36)*2.7;
    z += sin(t*frequency*3.7)*1.3;
    z += sin(t*frequency*5.3)*0.7;
    
    z += sin(u*frequency*0.875)*4.0;
    z += sin(u*frequency*2.4)*3.7;
    z += sin(u*frequency*4.3)*1.3;
    z += sin(u*frequency*6.2)*0.3;
    
    z *= 0.035;
    z += 0.1;
    return z;
}


float pattern( in vec2 p )
{
    float jTime = iTime * 0.057;

    vec2 q = vec2( fbm( p + vec2(0.,0.)), fbm(p + vec2(0.2*jTime, 1.3*jTime)));
    
    vec2 r = vec2( fbm(p + 4.0*q + vec2(1.7*jTime, 9.2*jTime) ), fbm( p + 4.0*q + vec2(8.3*jTime, 2.8*jTime) ) );
    
    return fbm( p + 2.0*r );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = 2.*(fragCoord/iResolution.xy) - 1.;
        
    vec3 rgb = vec3(
        0.4,
        0.4,
        0.5
    );
    
    vec3 offset = vec3(
    0.15,0.35,0.4
    );

    // Output to screen
    fragColor = vec4(rgb * vec3(pattern(uv),pattern(uv),pattern(uv)) + offset,1.); //RGBA
}

void main() {
    vec4 fragColor;
    mainImage(fragColor, gl_FragCoord.xy);
    gl_FragColor = fragColor;
}   