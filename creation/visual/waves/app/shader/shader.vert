



varying vec2 UV;

void main(){
    UV=uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}





