# Prompts used
- Let's spec the authentication forms on the /login and /signup pages. They need email and password fields, a 'hide password' icon and a submit button (signup/login). The forms should only log details to the console for now, when they are simulated. Wwe should be able to easily switch between the two forms.

- can you check the Tailwind 4 docs using Context7 to make sure these theme variables are set up correctly? 

- can you set up a backend firebase project for this app, called pocket-hiest-website? Do not configure any services or rules yet or add any code. Only create the project and register a web app 

- Cloud Firestore and Firebase Authetication. For the firestore secutirty rules, keep them in test mode for now for easy access. Only enable password authentication and nothing else. Do not set up Firebase hosting or deploy the app - only deploy the security rules if needed (in test mode)

# Install commands
For Adding a remote MCP server to Claude
- claude mcp add --transport http context7 https://mcp.context7.com/mcp --header "CONTEXT7_API_KEY: ctx7sk-d4b35b4e-6f66-4d1c-8266-84466aa75c55"