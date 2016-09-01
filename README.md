# Sample Cyclic Dependency

A sample on cyclic dependency.

Run these commands to generate the codex artifact.

```
npm install -g codexjs
npm install
codex ./ --namespace local --id js1 --ext js --minify --minifyKeys --minifyOptions='{"mangle":true}' > codex-output.json

```

You can verify that this cyclic files work by executing:

```
node main.js
```