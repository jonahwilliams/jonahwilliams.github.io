import 'dart:html';
import 'dart:web_gl';
import 'package:dart_gl_experiments/renderer.dart';
import 'package:dart_gl_experiments/src/engine/agent.dart';
import 'package:dart_gl_experiments/src/engine/sprites.dart';
import 'package:dart_gl_experiments/src/engine/world.dart';

RenderingContext2 getWebGL() {
  return (document.querySelector("#glCanvas") as CanvasElement)
      .getContext('webgl2') as RenderingContext2;
}

late final world = World(Agent(
  sprite: Sprite(
    1,
    1,
    0,
    4,
  ),
));
late final renderer = Renderer(getWebGL(), world);

void repainter(num x) {
  renderer.render(x.toDouble());
  window.requestAnimationFrame(repainter);
}

void main() {
  window.requestAnimationFrame(repainter);
}
