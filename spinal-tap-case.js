{
  "index.js": "function spinalCase(str) {\n\n\n\n  \n  return str.replace(/(.)([A-Z])/g, `$1 $2`).replace(/\\s+|_+/g, '-').replace(/--/g, '-').toLowerCase();\n}\n\nspinalCase('This Is Spinal Tap');\n"
}