<div style="margin-bottom: 20px;">
  <img src="phanes.jpg" alt="phanes" width="100%" style="display: block;"/>
</div>

# Synthetic Market Data API

A real-time synthetic stock market data generator and API.


## Features

- **Synthetic Data Generation**: Uses Geometric Brownian Motion (GBM) with NumPy for realistic stock price movements
- **Real-time Streaming**: WebSocket API for live market data feeds
- **Historical Data**: REST API with time-series optimized queries
- **Multiple Tickers**: Pre-configured with 5 synthetic stocks (SYNTH, TECH, FINANCE, ENERGY, HEALTH)
- **OHLCV Bars**: Aggregated candlestick data for multiple timeframes (1m, 5m, 1h, 1d)
- **TimescaleDB**: Optimized time-series database with automatic data retention
- **Production Ready**: Docker Compose for easy deployment, async I/O, and structured logging

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Python 3.11+ (for local development)

1. Clone the repository:
```bash
git clone 
cd market_data_engine
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Start all services:
```bash
docker-compose up -d
```

This will start:
- TimescaleDB (PostgreSQL with time-series extension)
- Kafka + Zookeeper
- Data Generator (GBM simulation)
- Data Processor (Kafka → Database)
- API Server (REST + WebSocket)

3. Initialize database:
```bash
python3 -m python_src.db.init
```

4. Start services in separate terminals:

```bash
# Terminal 1: Data Generator
python3 -m python_src.services.data_generator

# Terminal 2: Data Processor
python3 -m python_src.services.data_processor

# Terminal 3: API Server
uvicorn python_src.main:app --host 0.0.0.0 --port 3000 --reload
```

## API Endpoints

### REST API

Base URL: `http://localhost:3000/api/v1`

#### Get All Tickers
```
GET /tickers
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "ticker": "SYNTH",
      "name": "Synthetic Corp",
      "sector": "Technology",
      "initial_price": "150.00"
    }
  ]
}
```

#### Get Latest Quote
```
GET /quote/:ticker
```

**Example:** `GET /quote/SYNTH`

**Response:**
```json
{
  "success": true,
  "data": {
    "time": "2024-01-15T10:30:45.123Z",
    "ticker": "SYNTH",
    "price": "152.34",
    "volume": 12500,
    "bid": "152.28",
    "ask": "152.40"
  }
}
```

#### Get Historical Ticks
```
GET /history/:ticker?start=<ISO_DATE>&end=<ISO_DATE>&limit=<NUMBER>
```

**Parameters:**
- `start`: ISO timestamp (default: 1 hour ago)
- `end`: ISO timestamp (default: now)
- `limit`: max records (default: 1000, max: 10000)

#### Get OHLCV Bars
```
GET /bars/:ticker?timeframe=<1m|5m|1h|1d>&start=<ISO_DATE>&end=<ISO_DATE>&limit=<NUMBER>
```

**Parameters:**
- `timeframe`: `1m`, `5m`, `1h`, or `1d` (default: `1m`)
- `start`: ISO timestamp (default: 1 day ago)
- `end`: ISO timestamp (default: now)
- `limit`: max records (default: 500, max: 5000)

#### Get Statistics
```
GET /stats/:ticker?period=<1h|1d|7d|30d>
```

**Example:** `GET /stats/SYNTH?period=1d`

### WebSocket API

URL: `ws://localhost:3000/ws`

#### Connection

```python
import asyncio
import websockets
import json

async def connect():
    async with websockets.connect('ws://localhost:3000/ws') as websocket:
        # Receive welcome message
        message = await websocket.recv()
        print(f"Connected: {message}")

        # Subscribe to tickers
        await websocket.send(json.dumps({
            "type": "subscribe",
            "tickers": ["SYNTH", "TECH"]
        }))

        # Receive real-time ticks
        async for message in websocket:
            data = json.loads(message)
            print(f"Received: {data}")

asyncio.run(connect())
```

#### Subscribe to Tickers

```python
await websocket.send(json.dumps({
    "type": "subscribe",
    "tickers": ["SYNTH", "TECH"]
}))
```

#### Receive Real-time Ticks

```json
{
  "type": "tick",
  "data": {
    "ticker": "SYNTH",
    "price": 152.34,
    "volume": 12500,
    "bid": 152.28,
    "ask": 152.40,
    "timestamp": 1705318245123
  }
}
```

#### Unsubscribe

```python
await websocket.send(json.dumps({
    "type": "unsubscribe",
    "tickers": ["SYNTH"]
}))
```
## Ticker Configuration

The system includes 5 pre-configured synthetic tickers with different characteristics:

| Ticker | Name | Sector | Start Price | Drift | Volatility | Behavior |
|--------|------|--------|-------------|-------|------------|----------|
| SYNTH | Synthetic Corp | Technology | $150 | 5% | 20% | Balanced growth |
| TECH | Tech Innovations | Technology | $320 | 8% | 30% | High growth, high volatility |
| FINANCE | Finance Holdings | Finance | $85 | 3% | 15% | Stable, low volatility |
| ENERGY | Energy Solutions | Energy | $65 | 2% | 25% | Commodity-like behavior |
| HEALTH | Healthcare Partners | Healthcare | $180 | 6% | 18% | Moderate growth |


## Development

### Adding New Tickers

Edit `python_src/services/data_generator.py` and add to `TICKER_CONFIGS`:

```python
"NEWTICKER": {
    "start_price": 100.0,
    "drift": 0.05,      # 5% annual return
    "volatility": 0.2,  # 20% volatility
    "min_price": 10,
    "max_price": 1000
}
```

Then add to `.env`:
```

### Database Access

Connect to TimescaleDB:
```bash
docker-compose -f docker-compose.python.yml exec timescaledb psql -U postgres -d synthetic_market
```

## Performance

- **Data Generation**: 10 ticks/second per ticker (configurable)
- **Storage**: TimescaleDB with automatic compression and retention
- **API**: Async FastAPI with high concurrency
- **WebSocket**: Unlimited real-time connections (within server capacity)
- **Data Retention**: 30 days (configurable)