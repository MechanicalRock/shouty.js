#!/bin/bash

docker build . -t shouty.js

docker run -it -p 3000:3000 -v `pwd`:/shouty.js shouty.js /bin/bash
