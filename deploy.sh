#!/bin/bash

npm install netlify-cli -g

# Clone the documentation directory of the OasisMenu repository
git clone --depth=1 --branch=main https://github.com/shivamdevs/OasisMenu.git ./myoasis-docs-oasismenu

# Deploy the documentation directory to the oasismenu subdirectory of your Netlify project
netlify deploy --prod --dir=./myoasis-docs-oasismenu/documentation oasismenu
