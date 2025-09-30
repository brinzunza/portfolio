<div style="margin-bottom: 20px;">
  <img src="plato.jpeg" alt="youarewong" width="100%" style="display: block;"/>
</div>

# You Are Wrong

AI-powered real-time fact-checker that listens to your statements and provides counterarguments using GPT.

## What It Does

- Detects when you're talking using facial recognition
- Transcribes your speech in real-time
- Sends statements to OpenAI for fact-checking
- Returns truth assessment and counterargument

## Requirements

- OpenAI API key
- Modern browser (Chrome/Safari)
- Camera and microphone access

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create `.env` file:
```bash
OPENAI_API_KEY=your_api_key_here
```

3. Run:
```bash
python app.py
```

4. Open browser: `http://localhost:5001`

## Compatible With

- Desktop: Chrome, Edge, Firefox
- Mobile: Safari (iOS), Chrome (Android)
- Requires HTTPS for mobile camera/microphone access