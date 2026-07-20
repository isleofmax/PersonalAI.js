# PersonalAI.js
PersonalAI.js is a REPL for llama.cpp.
You must have installed llama.cpp on your PC and then configure your .personal-ai configuration
file in your $HOME directory.
Personal AI has 2 interfaces, console and web.

## Requirements
- [llama-cpp](https://github.com/ggml-org/llama.cpp/releases)
- [nodejs](https://nodejs.org/en) version >= 24.18.0

## Libraries used
- commander  15.0.0
- @huggingface/hub 2.13.3


### Commands
- help: view help
- server: launch the web interface
- cli: launch the console interface
- list: view a list of available LLM's
- config: view your config file

### Config file
Config file .personal-ai is located in your $HOME directory and use json format
