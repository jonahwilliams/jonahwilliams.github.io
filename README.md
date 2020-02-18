
This takes a bit of setup to get going. First ensure that your compilation is up to date. The correct configuration is:

`./flutter/tools/gn --unopt --full-dart-sdk`

Then you need to produce the compiled web_worker script. This can be done with:

`out/host_debug_unopt/dart-sdk/bin/dart2js flutter/web_worker_compiler/bin/main.dart -o flutter/web_worker_compiler/compiler.js`

Then, copy the fluter_web SDK summary to the web directory:

`cp out/host_debug_unopt/flutter_web_sdk/kernel/flutter_ddc_sdk.dill flutter/web_worker_compiler/web/flutter_ddc_sdk.dill`

Then to see the results, `cd flutter/web_worker_compiler/web` and then run a local server with `python -m SimpleHTTPServer`.