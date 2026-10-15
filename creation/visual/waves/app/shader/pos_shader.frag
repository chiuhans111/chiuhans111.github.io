varying vec2 UV;
uniform sampler2D pos_texture;
uniform sampler2D vel_texture;
uniform vec2 size;

uniform float init;


vec4 getPos(vec2 UV){
    vec4 pos = texture2D(pos_texture, UV);
    pos.xyz = normalize(pos.xyz-.5) * pos.w * 2.0;
    return pos;
}

void main(){
    vec4 color = vec4(1);
    color.rg = UV.xy;

    vec2 dx = vec2(1.0/size.x, 0);
    vec2 dy = vec2(0, 1.0/size.y);

    vec4 pos = getPos(UV);

    vec4 vel = texture2D(vel_texture, UV);

    vel.xyz = normalize(vel.xyz-.5) * vel.w * 2.0;

    
    pos = pos*.4 + (
        + getPos( UV+dx )
        + getPos( UV+dy )
        + getPos( UV-dx )
        + getPos( UV-dy )
    ) * .6*.25;
    
    pos+=(vel)*0.9;

    // pos = mix(pos, vec4(.5,.5,.5,0), 1.-smoothstep(0.01,.05, UV.x));


    pos.w = length(pos.xyz) * 0.5;
    pos.xyz = normalize(pos.xyz)*.5+.5;
    if(pos.w<0.005){
        pos*=smoothstep(0.0,0.005,pos.w);
    }

    vec3 initial = (sin(UV.yxy*20.) + cos(UV.yxx*20.))*.1;
    initial += (sin(UV.yxy*10.) + cos(UV.yxx*10.))*.1;
    initial += (sin(UV.yxy*5.) + cos(UV.yxx*5.))*.1;
    initial*=.5;

    gl_FragColor = mix(
        vec4(pos), 
        vec4(normalize(initial)+.5, length(initial)),
        init
    );
}

