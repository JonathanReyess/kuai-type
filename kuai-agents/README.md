# Chinese Vocab Agent System

A multi-agent system that processes textbook vocabulary and generates graded reading stories using the Gemini API.

## Prerequisites

- Node.js 18+ installed
- A Gemini API key (get one at https://makersuite.google.com/app/apikey)

## Setup

1. **Extract the project** and open a terminal in the project folder

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

## Usage

1. Enter your Gemini API key
2. Paste your textbook vocabulary text
3. Set a topic name (e.g., "Lesson1")
4. Click "Run Agent Pipeline"
5. Copy the generated code when complete

## How It Works

The system runs 4 AI agents in sequence:

1. **Vocab Parser** - Extracts structured vocabulary (simplified, pinyin, definition)
2. **Easy Agent** - Generates 10 simple stories (15-25 characters)
3. **Medium Agent** - Generates 10 intermediate stories (30-50 characters)  
4. **Hard Agent** - Generates 10 advanced stories (60-100 characters)

All story agents apply proper tone sandhi rules for pinyin.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.
