# Logger.js

Control logs for production systems and development.

## Usage

Include principal js (enable or disabled logs)
```javascript
//For production systems
Logger.disableLog();
//For development systems
Logger.enableLog();
```

And the other using the following script
```javascript

Logger.success(var1,var2,...,varN);
Logger.info(var1,var2,...,varN);
Logger.warn(var1,var2,...,varN);
Logger.error(var1,var2,...,varN);


```
