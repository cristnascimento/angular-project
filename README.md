# Angular

## Install Node (v10+) on Ubuntu 18.04 32 bits

Angular requires Node v10+ npm 3+.

Ubuntu 32 bits apt manager supports until v8.

Use unofficial binaries:
* https://unofficial-builds.nodejs.org/download/release/v10.21.0/

Tested with **_node-v10.21.0-linux-x86.tar.gz_**

Extract and copy to **/usr/local/lib/nodejs/**

```console
$ ls /usr/local/lib/nodejs/
node-v10.21.0-linux-x86
```
```console
$ vim ~/.profile
$ export PATH=/usr/local/lib/nodejs/node-v10.21.0-linux-x86/bin:$PATH
```
