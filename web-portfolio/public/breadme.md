<div style="margin-bottom: 20px;">
  <img src="mnemosyne.jpg" alt="mnemosyne" width="100%" style="display: block;"/>
</div>

# brain

a minimalistic personal knowledge platform for storing and querying your thoughts, files, and memories.

## features

- **text input**: store any text data (ideas, stories, characteristics, health data)
- **file upload**: upload text files for storage
- **question answering**: ask questions about your stored data using rag (retrieval-augmented generation)
- **vector database**: uses chromadb for efficient semantic search
- **minimalistic ui**: black/white/green color scheme with jetbrains mono font

## setup

### backend

1. navigate to backend directory:
```bash
cd backend
```

2. install python dependencies:
```bash
pip install -r requirements.txt
```

3. create `.env` file with your openai api key:
```bash
cp .env.example .env
# edit .env and add your openai api key
```

4. run the backend server:
```bash
python main.py
```

backend will run on `http://localhost:8000`

### frontend

1. navigate to frontend directory:
```bash
cd frontend
```

2. install dependencies:
```bash
npm install
```

3. run the development server:
```bash
npm run dev
```

frontend will run on `http://localhost:5173`

## usage

1. **add text**: type anything you want to remember and click "store"
2. **add file**: choose a text file and click "store"
3. **ask questions**: type questions about your stored data and get answers

example:
- store: "i played soccer from 10 years old to 15 years old"
- ask: "did i play soccer in my life?"
- answer: "yes, you played soccer from when you were 10 years old to 15 years old"

## tech stack

- **frontend**: react + vite
- **backend**: python + fastapi
- **vector database**: chromadb
- **embeddings**: openai text-embedding-3-small
- **llm**: openai gpt-4-turbo-preview
