#!/bin/bash

for arg in "$@"; do
    echo "$arg"
    ((count++))
    [ $count -ge 3 ] && break
done
