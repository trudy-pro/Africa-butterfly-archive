## Archive Repo Codex Integration Plan

Goal: Add a script to this repo that calls the OpenAI API to generate or modify archive repository code.

1. Create a script file (e.g. `archive-codex.js`) in the repo.
2. The script should accept a natural language prompt describing the archive task.
3. Use the OpenAI REST API with an API key from the environment (e.g. `OPENAI_API_KEY`).
4. Send the prompt to a Codex-style model or the users chosen OpenAI model.
5. Receive generated code back and either:
   - print it to the console, or
   - write it to a target file in the repo.
6. Optionally add command-line arguments for:
   - prompt text,
   - target output file,
   - model selection.
7. Keep the script lightweight and easy to invoke from the repo root.

Requirements needed from user:
- Confirm whether to generate new archive repo code or modify existing files.
- Confirm the model to use and whether they already have an OpenAI API key.
- Confirm any specific archive repo behaviors or repo targets.
