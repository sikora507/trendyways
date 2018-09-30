
Trendyways-Module
==========
Trendyways library by rubenafo wrapped into javascript module.

Small javascript library containing methods to be used in financial technical analysis of stock time series.
It is intended to be a simple library, suitable to be inserted in any visulization workflow to generate results on the fly.


How to use it
-------------
Install via npm:
```
npm i trendyways-module
```
Then in your javascript file use require or import syntax:
```
import trendyways from 'trendyways-module'
```
And you are ready to use its functions like
```
var macd = trendyways.indicators.macd(....);
```
Documentation
-------------
Please refer to the wiki of the project to access the latest documentation: https://github.com/rubenafo/trendyways/wiki

__General purpose functions:__
 
* series min.
* series max.
* series mean.
* series standar deviation.

__Averages and Intervals:__
* MA: simple moving average.
* EMA: exponential moving average.
* WMA: weighted moving average.
* Bollinger bands (window n, k value).

__Error methods:__
* series MSE
* series RMSE
* series MAE

__Support and Resistance methods:__
* Floor pivot points (resistances R1, R2 and R3; and supports S1, S2 and S3).
* Tom Demarks Points (low:high values prediction).
* Woodies Points (resistances R1,R2; and supports S1 and S2).
* Camarilla Points (resistances R1,R2,R3 and R4; supports S1,S2,S3 and S4).
* Fibonacci Retracements (for both uptrend and downtrend series).

__Technical Indicators:__
* On-Balance Volume (obv)
* Price and Volume Trend (pvt)
* Money Flow Index (mfi)
* MACD indicator (macd)
* Momentum (n-th order momentum)
* Rate of Change (ROC) (n-th order)
* RSI (Relative Strength Index) (n-th order)
* Average True Range (ATR)
* Average Directional Index (ADV)

Tests
-------------
If you want to run your tests locally, use mocha to run the /tests files:
```
npm run test
```
