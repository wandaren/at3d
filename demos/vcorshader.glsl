attribute vec3 aVertexPosition;
attribute vec4 aVertexColor;
attribute vec3 aVertexNormal;

uniform mat4 uMMatrix;
uniform mat4 uVMatrix;
uniform mat4 uPMatrix;
uniform mat3 uNMatrix;

varying vec4 vColor;
varying vec3 vTransformedNormal;
varying vec4 vPosition;

void main(void)
{
  vPosition = uVMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
  gl_Position = uPMatrix * vPosition;
  vColor = aVertexColor;
  vTransformedNormal = uNMatrix * aVertexNormal;
}