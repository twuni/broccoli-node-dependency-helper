# broccoli-node-dependency-helper

This Broccoli helper simplifies the process of including Node (npm) dependencies within your app.

## Usage

### `function(spec = {})`

 * `spec`: Required. An `object` where each key is a source path to a file within the **node_modules** directory and each value is the target path within the resulting Broccoli tree.

 * Returns a Broccoli tree containing the specified files.
