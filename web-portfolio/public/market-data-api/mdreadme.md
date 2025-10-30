Growing up fascinated with investing and trading, all the data I had access to was TradingView. I would open up the application, look at charts, and how they reacted to certain events. I did my research and learned the basics of technical and fundamental analysis. I would try and test different strategies that were only manually implemented and executed. This was tedious and incredibly slow. It didn't take long for me to put my effort into optimizing and automating my workflow. To my surprise, I discovered many people involved in algorithmic trading. I knew how to code and knew the basics of trading, so I decided to combine them and join the algorithmic trading world. I would convert my strategies to code but quickly hit hurdles with how I would test them. Since all I knew was TradingView, it made it impossible to properly evaluate it. So I turned my direction away from it. 

To my surprise, I discovered many different data providers for historical data (many with free plans) which was a great feeling being a student and trying to avoid any costs possible. However, I figured that backtesting my strategies on historical data would not be sufficient to properly assess its robustness and profitability. Live testing is really the ultimate test and the only true way to find out if a strategy is consistently profitable. 

Counter to my successes to find historical market data, it was devastating to find out there wasn't a single service that provided live data for under than $100 a month for a singular market (forex, stocks, futures). The small light at the end of the tunnel was that some provided crypto data, however, it was either not very well updated (inconsistent updates when requested) or inconsistent to firms to actually enter positions. 

Rather than give up, I turned back to how I resolved my original trading issue, code. With the rise of generative artificial intelligence I attempted to create synthetic data, however inferencing AI models for a lot of accurate and consistent data is extremely difficult and slow. I pivoted and discovered Geometric Brownian Motion. It uses random motion following the properties of many financial markets and creates simulated price ticks.  

<div style="margin-bottom: 20px;">
  <img src="/market-data-api/gmb.png
  " alt="Charts" width="100%" style="display: block;"/>
</div>

*We can manipulate its parameters to follow the movement of different markets. For example, crypto is much more volatile compared to forex and we can simulate that by increasing the volatility parameter. Likewise forex has a lower expected growth rate than most large stocks which we can simulate by decreasing drift.*

With this formula, we can constantly make ticks for multiple ticker types. Then to connect it to my algorithmic trading code, we can implement an API/Websocket connection. This way I can continue to use the algorithmic trading whether I use a real market data API or this synthetic data API. 

Upon testing, I figured it had consequently solved problems I had not preplanned. 

- - **First**, it solved the cost problem. The creation of synthetic data allows me to avoid having to pay the expensive subscription of industry plans.
- - **Second**, it solved the time problem. While most financial markets have scheduled times when they are closed and do not allow trading or do not have enough volume, the synthetic data can run consistently 24/7 (which should be considered when testing and reverting to real data).
- - **Third**, it solved the variety problem. While most subscriptions only give you access to one ticker or financial market, this synthetic data can generate data movement among a variety of different markets with different movements, prices, and spreads.
- - **Fourth**, it solved limits in the range of data. While most historical data has a limit to how far back in the past you can retrieve data, it can result in overfitting. Creating synthetic data constantly creates new data unseen, random data which easily prevents this.
- - **Fifth**, it solves the data consistency problem. While some have subscriptions with multiple data providers to fill all of their needs, it can result with different data schemas and completeness. Having synthetic data gives you the control to keep things consistent and running only when you need it to.
- - **Sixth**, it solves the rate limiting problem. Due to high usage, many firms have a rate limit for users. This can be a bottleneck for those seeking very low latency and high requests for data. With full control over your own data, rate limiting can be configured to any limit, allowing for proper adaptability to any strategy.