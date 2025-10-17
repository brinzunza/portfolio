One of the main bottlenecks we have as humans is our memory retention. We are very efficient at storing what is important and forgetting what is not. However, we choose to store things that we BELIEVE are important in the moment and not what we really need in the future. This causes us to get into positions where we either don’t remember things thinking it wasn’t important or we forget things due to too many things we needed to remember. 

The reality is we're drowning in information while simultaneously forgetting everything important. According to research from University of California, the average person consumes about 34 gigabytes of information daily yet studies show humans forget approximately 70% of new information within 24 hours and 90% within a week. That's not just inefficient, it's catastrophic when you consider how much time we spend reading articles, taking notes, having conversations, and consuming content that vanishes from our minds almost immediately. As of 2024, knowledge workers spend an estimated 2.5 hours per day just searching for information they know they encountered before but can't recall or locate. Here is a breakdown of the human memory hierarchy:

<div style="margin-bottom: 20px;">
  <img src="/brain/pyramid.png" alt="Math" width="100%" style="display: block;"/>
</div>
The current state of our personal knowledge breaks down into three critical problems:

## 
1. Fragmentation: Our knowledge is scattered everywhere. Notes on paper, on Apple notes, highlights in books, pdf files, text messages, random thoughts, and many more. Crucial thoughts, ideas, and understanding is lost due to the lack of organization of all of this data.

2. Retrieval: Even when we’ve saved all of our information, finding it becomes a nightmare. Traditional search on different applications is based on filtering for exact keywords. Then you have to manually search through different files or text to actually find the answer you’re looking for, if it’s even there. You can’t ask natural questions like "what was that health insight I read last month?" or "did I ever learn about vector databases?" The friction becomes too high to the point where they would rather re-research things rather than finding what they already know. 

3. Knowledge synthesization: Most note taking apps and other sources of documents and ideas or glorified file cabinets. They store information but don’t understand it. You can’t synthesize information across different sources and be able to draw connections for complex questions. These tools can’t think about your knowledge; they solely store it. 
    
<div style="margin-bottom: 20px;">
  <img src="/brain/workflow.png" alt="Math" width="100%" style="display: block;"/>
</div>

The solution? Combining computer power to ease the computation and storage from our brains. The future is trending towards the intersection because humans and computers and this approach is proving why that is true. This is a system that knows what you know, remembers what you've forgotten, and can synthesize your accumulated knowledge on demand without compromising privacy. brain directly solves these problems by providing a minimal, self-hosted, AI-powered personal memory system that stores anything you tell it and answers questions by understanding the semantic meaning of your data.
## 
brain implements Retrieval-Augmented Generation (RAG), a technique that's become the gold standard for building AI systems that answer questions based on specific knowledge bases.

Example:

- Stored: "i played soccer from 10 years old to 15 years old"
- Query: "did i play soccer in my life?"
- Match: HIGH similarity (both about playing soccer, personal history)

Even though the words differ, the semantic meaning aligns, so retrieval works.

Why RAG?

Context is everything. When a query is made, we need to get all the proper context and information before feeding it to an llm to synthesize it and return a natural language answer. RAG is exactly that. We combine multiple approaches to make sure we contain all the necessary context for each query. 

<div style="margin-bottom: 20px;">
  <img src="/brain/flowchart.png" alt="Math" width="100%" style="display: block;"/>
</div>
Data privacy is at the root of most skeptics. We solved this.

brain prioritizes data sovereignty:

Local-First Architecture:

- User authentication and single user local deployment
- Vector database stored in ./chroma_db on your machine
- No cloud backup (unless you explicitly configure one)
- ChromaDB never phones home
- Your data never leaves your computer except for OpenAI API calls
    - OpenAI's API terms (as of 2024): API data is not used for training models unless you explicitly opt in. Data is retained for 30 days for abuse monitoring, then deleted.
    - However, for even more privacy, there is the option to use local models through ollama.
        - Local models would be for:
            - Embeddings: Use local model like sentence-transformers/all-MiniLM-L6-v2
            - LLM: Use local model like Llama 3 via Ollama

Use Cases with different input types:

<div style="margin-bottom: 20px;">
  <img src="/brain/interface.png" alt="Math" width="100%" style="display: block;"/>
</div>
brain shines in specific scenarios:

Personal Knowledge Base:

- Store random thoughts, ideas, shower insights
- Never forget that brilliant idea you had at 2am
- Ask "what was that book recommendation Sarah mentioned?"

Health Tracking:

- "i had a headache on march 15th after eating dairy"
- Later ask: "do i get headaches after eating dairy?"
- System finds patterns across months of entries

Research Organization:

- Upload 50 PDF papers on your machine learning notes
- Ask "what are the main approaches to few-shot learning?"
- Get synthesized answer across all papers

Meeting Notes:

- Store notes from every meeting as files
- Ask "what did we decide about the authentication system?"
- Retrieves relevant discussion from weeks ago

Life Logging:

- "visited tokyo in april 2024, loved the ramen shops"
- Ask "where have i traveled?"
- Get chronological list of trips

Learning Journal:

- Store explanations of concepts as you learn them
- Ask "how does attention mechanism work in transformers?"
- Get YOUR explanation back, in YOUR words

brain makes deliberate tradeoffs:

No Conversation Memory:

Each question is independent. The system doesn't remember previous questions in the session for one main reason. Context is everything. Cluttering and filling up the context window is suboptimal for this implementation. Hoping I can fix this in the future. 

Near-Term Additions:

Document Browser: View all stored entries, search by metadata, delete individual items

Categories/Tags: Organize knowledge into labeled buckets, filter retrieval by category

Export Functionality: Download all data as JSON, migrate to different systems

Source Citations: Show which documents were used to generate each answer

Mid-Term Features:

Advanced File Types: Handle images (OCR), audio (transcription), video (captions)

Knowledge Graph: Build relationships between concepts, enable graph traversal queries

Periodic Summaries: Daily/weekly AI-generated summaries of newly stored information

Notion/Obsidian Integration: Sync with external note-taking systems

Long-Term Vision:

Voice Interface: Speak questions, get audio answers (Whisper + TTS)

Mobile Apps: iOS/Android clients with offline sync

Email Integration: Ingest important emails automatically

Collaborative Brains: Share specific knowledge domains with others

Temporal Reasoning: "What did I know about X in 2023 vs now?" with versioning