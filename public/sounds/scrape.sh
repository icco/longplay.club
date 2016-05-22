#! /bin/bash

for i in $(cat data.json | jq .[].freq); do
  wget https://autochords.com/assets/audio/piano/$i.{minor,major,diminished}.mp3;
done
